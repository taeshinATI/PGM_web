var pollingChart;

function setUpChart(dataVotes) {
var ctx_live = document.getElementById("mycanvas");
         var myChart = new Chart(ctx_live, {
         type: 'bar',
           data: {
             labels: ['Pizza', 'Burger', 'ASDF'],
             datasets: [{
               label: 'Pizza Vs Burger',
               data: dataVotes,
               fill: false,
               backgroundColor: ['#00eefa','#37dbff','#e28743'],
               borderColor: '#000',
               borderWidth: 1
             }]
           },
           options: {
             plugins: {
               labels: {
                 render: 'image',
                 textMargin: -130,
               }
             },
             scales: {
               yAxes: [{
                 ticks: {
                   beginAtZero: true
                 }
               }]
             }
           }
         });

pollingChart = myChart;
}

function myVote(voteTo) {
    var vote
    if (voteTo == 'pizza'){
    vote = 0
    }
    else if (voteTo == 'burger'){
    vote = 1
    }
    else {
    vote = 2
    }
//    var vote = voteTo === 'pizza' ? 0 : 1;
    pollingChart.data.datasets[0].data[vote] += 1;
    pollingChart.update();
}

