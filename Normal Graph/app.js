document.getElementById('button').addEventListener('click', getGraph);

var output = [];
let i = 0;

function getGraph() {
    fetch('test.json').then(response => response.json())
    .then(data => {
        output = data;
        console.log(output);
    })
}

var xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
];
var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

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
const charts = new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,     // this will fill the color till the points from bottom
            label: 'Dynamic',
            lineTension: 0,
            backgroundColor: "rgb(62,149,205,0.1)",
            borderColor: "rgb(62,149,205)",
            data: yValues
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