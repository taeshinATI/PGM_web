var pollingChart2;



function setUpChart2(dataVotes) {
var ctx_live2 = document.getElementById("mycanvas2");
         var myChart2 = new Chart(ctx_live2, {
         type: 'bar',
           data: {
             labels: ['Pizza', 'Burger'],
             datasets: [{
               label: 'Pizza Vs Burger',
               data: dataVotes,
               fill: false,
//               backgroundColor: ['#00eefa','#37dbff'],
               borderColor: '#000',
               borderWidth: 4
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

pollingChart2 = myChart2;
}

function myVote2(voteTo) {
    var vote = voteTo === 'pizza' ? 0 : 1;
    pollingChart2.data.datasets[0].data[vote] += 1;
    pollingChart2.update();
}

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