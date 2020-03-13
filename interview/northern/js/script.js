$(document).ready(function() {
    $("#sign").click(function(){
//      $(".form").show();
        $( ".form" ).fadeIn();
    });
//    $(".dropdown-menu").on('click', 'a', function(){
//      $(".btn:first-child").text($(this).text());
//      $(".btn:first-child").val($(this).text());
//   });
    $("#sign_up").click(function() {
        if(ValidateEmail($("#email").val())) {
            $(".error").hide();
            $("#email").css("border","0px solid transparent");
            $("#sign_up").text("Submitting...");
            setTimeout(function(){ Complete(); }, 1000);
        } else {
            $(".error").show();
            $("#email").css("border","2px solid #d02035");
        }
    })
    function ValidateEmail(mail) 
    {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
      {
        return (true)
      }
        return (false)
    }
    function Complete() {
        $(".sign_form").hide();
        $(".sign_complete").show();
    }
});
