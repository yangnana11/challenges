$(document).ready(function(){
    $.getJSON("https://www.hatchways.io/api/assessment/students", function( data ) {
        for (let i = 0; i<data.students.length; i++) {
            let row = data.students[i];
            let sum = 0;
            let test_tag = "<div class='hide'>";
            for (let j = 0; j<row.grades.length; j++) {
                sum += parseInt(row.grades[j]);
                test_tag += "<div>Test "+parseInt(j+1)+": "+row.grades[j]+"%</div>"
            }
            test_tag+="<div class='tag'></div>";
            test_tag+="<input class='inputTag' type='text' placeholder='Add a tag'>";
            test_tag+="</div>";
            $("#content").append("<div class='item'>"+
                              "<div><img src='"+row.pic+"'></div>"+
                              "<div>"+
                              "<div class='name'>"+row.firstName+" "+row.lastName+"</div>"+
                            "<div>Email: "+row.email+"</div>"+
                            "<div>Company: "+row.company+"</div>"+
                            "<div>Skill: "+row.skill+"</div>"+
                            "<div>Average: "+(sum/row.grades.length).toFixed(2)+"%</div>"+
                            test_tag+
                              "</div>"+
                            "<div class='expand-btn close'><i class='fas fa-plus'></i></div>"+
                             "</div>");
        }
        $(".expand-btn").click(function() {
            if ($(this).hasClass("close")) {
                $(this).html("<i class='fas fa-minus'></i>");
                $(this).removeClass("close").addClass("open");
            } else {
                $(this).html("<i class='fas fa-plus'></i>");
                $(this).removeClass("open").addClass("close");
            }
            $(this).parent().children().children(".hide").toggle( "slow" );
            
        });
         $('.inputTag').keypress(function(event) {
            if (event.keyCode == 13) {
                $(this).parent().children(".tag").append("<div>"+$(this).val()+"</div>");
                $(this).val("");
            }
        });
    });
    
    $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".name").filter(function() {
          $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $("#searchTag").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".tag").filter(function() {
          $(this).parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    
})