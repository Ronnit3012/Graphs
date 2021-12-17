document.getElementById('button').addEventListener('click', getGraph);

var xyValues = [];
var xValues = [];
var yValues = [];
var y1Values = [];
var output = [];
let i = 0, random, xy;

function getGraph() {
    fetch('data.json').then(response => response.json())
    .then(data => {
        output = data;
        console.log(output);
    })
}

function updateData(data) {
    if(i>8) {
        xyValues.shift();
        xValues.shift();
        yValues.shift();
        y1Values.shift();
    }
    xy = {x: i, y: data.y}
    xyValues.push(xy);
    xValues.push(i);
    yValues.push(data.y);
    y1Values.push(data.y1);
    charts.update();
}

setInterval(() => {
    random = Math.floor(Math.random()*(15));
    updateData(output[random])
    i++;
}, 1000)

// Scatter plots
// const charts = new Chart("myChart", {
//     type: "scatter",
//     data: {
//         datasets: [{
//             pointRadius: 4,     
//             pointBackgroundColor: "rgb(0,0,255)",   
//             data: xyValues      
//         }]
//     },
//     options: {
//         legend: {display: false},
//         scales: {
//             // xAxes: [{ticks: {min: 40, max: 160}}],   // X-axis range
//             xAxes: [{ticks: {min: xyValues[0], max: xyValues[xyValues.length-1]}}],   // X-axis range
//             yAxes: [{ticks: {min: 6, max:16}}],     // Y-axis range
//         }
//     }
// });

// Line Graphs
// const charts = new Chart("myChart", {
//     type: "line",
//     data: {
//         labels: xValues,
//         datasets: [{
//             fill: false,     // this will fill the color till the points from bottom
//             label: 'Live',
//             lineTension: 0,
//             backgroundColor: "rgb(62,149,205,0.1)",
//             borderColor: "rgb(62,149,205)",
//             data: yValues
//         }
//         ], 
//     },
//     options: {
//         responsive: true,   // to make it responsive according to size of the scren
//         legend: {    // to Make it switch on and off the line
//             display: true
//         },
//         title: {
//             display: true,
//             text: 'Dynamic Graph'
//         },
//         position:'left',   // to make the graph a ppsition at left
//         align:'start',    // To make it begin from start if not defined
//         scales: {
//             xAxes: [{ 
//                 gridLines: {   // for adjusting the color of the gridlines for X-Axis
//                     color: "rgba(0,0,0,0.2)",
//                     zeroLineColor: 'rgba(0,0,0,0.2)'
//                 },
//             }],
//             yAxes: [{
//                 gridLines: {    // for adjusting the color of the gridlines for Y-Axis
//                     color: "rgba(0,0,0,0.2)",
//                     zeroLineColor: 'rgba(0,0,0,0.2)'
//                 },
//                 ticks: {   // For min and max values
//                     min: 6,
//                     max:16
//                 }
//             }],
//         }
//     }
// });

// Multiple Line Graphs
const charts = new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,     // this will fill the color till the points from bottom
            label: '1',
            lineTension: 0,
            backgroundColor: "rgb(62,149,205,0.1)",
            borderColor: "rgb(62,149,205)",
            data: yValues
        }, {
            fill: false,     // this will fill the color till the points from bottom
            label: '2',
            lineTension: 0,
            // backgroundColor: "rgba(0,255,0,1.0)",    // this will set blue + 1 transparency on plotting points
            backgroundColor: "rgb(60,186,159,0.1)", 
            // borderColor: "rgba(0,255,0,0.1)",    // this will set blue + 0.1 transparency on lines
            borderColor: "rgb(60,186,159)", 
            data: y1Values
        }
        ], 
    },
    options: {
        responsive: true,   // to make it responsive according to size of the scren
        legend: {    // to Make it switch on and off the line
            display: true
        },
        title: {
            display: true,
            text: 'Dynamic Graph'
        },
        position:'left',   // to make the graph a ppsition at left
        align:'start',    // To make it begin from start if not defined
        scales: {
            xAxes: [{ 
                gridLines: {   // for adjusting the color of the gridlines for X-Axis
                    color: "rgba(0,0,0,0.2)",
                    zeroLineColor: 'rgba(0,0,0,0.2)'
                },
            }],
            yAxes: [{
                gridLines: {    // for adjusting the color of the gridlines for Y-Axis
                    color: "rgba(0,0,0,0.2)",
                    zeroLineColor: 'rgba(0,0,0,0.2)'
                },
                ticks: {   // For min and max values
                    min: 6,
                    max:16
                }
            }],
        }
    }
});