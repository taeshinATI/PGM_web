var pollingChart3;

function drawChart(xData,yData) {
var ctx_live3 = document.getElementById("machine_graph");
         var myChart3 = new Chart(ctx_live3, {
         type: 'bar',
           data: {
             labels: yData,
             datasets: [{
               label: 'Machine',
               data: xData,
               fill: false,
//               backgroundColor: ['#00eefa','#37dbff'],
               borderColor: '#000',
               borderWidth: 2
             }]
           },
           options: {
             plugins: {
               labels: {
                 render: 'image',
                 textMargin: -100,

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

pollingChart3 = myChart3;
}

//function myVote2(voteTo) {
//    var vote = voteTo === 'pizza' ? 0 : 1;
//    pollingChart3.data.datasets[0].data[vote] += 1;
//    pollingChart3.update();
//}

//function evtClick(){
//    var ctx_live2 = document.getElementById("mycanvas2");
//    var clickEvt = document.getElementById("mycanvas2").onclick = function(evt) {
//        var activePoints = mycanvas2.getElementsAtEvent(evt);
//
//        if(activePoints.length > 0)
//        {
//            var clickedElementindex = activePoints[0]["_index"];
//
//            var label = mycanvas2.data.labels[clickedElementindex];
//
//            var value = mycanvas2.data.datasets[0].data[clickedElementindex];
//        }
//    }
//}