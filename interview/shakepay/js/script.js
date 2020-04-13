var config = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Net Worth',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Net Worth Chart (constant rate)'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date Time'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};
$(document).ready(function(){
    var ctx = document.getElementById('myChart').getContext('2d');
    window.myLine = new Chart(ctx, config);
    let cad_bal = 0;
    let btc_bal = 0;
    let eth_bal = 0;
    let btc_cad_rate = 9432.24; 
    let eth_cad_rate = 216.12;
    let net = 0;
    $.getJSON('https://shakepay.github.io/programming-exercise/web/transaction_history.json', function(row) { 
        for (let step = row.length-1; step>=0; step--) {
            let item = row[step];
            if (item.type == 'conversion') {
              switch(item.to.currency) {
                  case 'BTC': btc_bal+=item.to.amount; break;
                  case 'ETH': eth_bal+=item.to.amount; break;
                  case 'CAD': cad_bal+=item.to.amount; break;
              }
            } else if (item.direction == 'credit') {
                switch(item.currency) {
                    case 'BTC': btc_bal+=item.amount; break;
                    case 'ETH': eth_bal+=item.amount; break;
                    case 'CAD': cad_bal+=item.amount; break;
                }
            } else if (item.direction == 'debit') {
                switch(item.currency) {
                    case 'BTC': btc_bal-=item.amount; break;
                    case 'ETH': eth_bal-=item.amount; break;
                    case 'CAD': cad_bal-=item.amount; break;
                }
            }
            net = cad_bal + (btc_bal * btc_cad_rate) + (eth_bal * eth_cad_rate);
            moment.defaultFormat = "DD.MM.YYYY HH:mm:ss";
            let t = moment(item.createdAt).format();
            $('#display').append('<tr><td>'+ t
                                 +'</td><td>'+cad_bal
                               +'</td><td>'+btc_bal
                               +'</td><td>'+ btc_cad_rate
                               +'</td><td>'+ eth_bal
                               +'</td><td>'+ eth_cad_rate
                               +'</td><td>'+ net
                               +'</td></tr>');
            
            config.data.labels.push(t);

            config.data.datasets.forEach(function(dataset) {
                dataset.data.push(net);
            });

            window.myLine.update();
        }
    }); 
});