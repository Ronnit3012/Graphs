document.getElementById('button').addEventListener('click', getGraph);

var xyValues = [];
var xValues = [];
var yValues = [];
var output = [];
let i = 0;

function getGraph() {
    fetch('test.json').then(response => response.json())
    .then(data => {
        output = data;
        // console.log(output);
    })
}

// for(let i=0; i< output.length; i++) {
    // setInterval(updateData(output[i]), 1000)
    // updateData(output[i]);
// }

setInterval(() => {
    if(i < output.length) { 
        updateData(output[i])
        i++;
    }
}, 1000)

function updateData(data) {
    // console.log(xyValues);
    // xyValues.push(data);
    // xValues.push(data.x);
    // yValues.push(data.y);
    // charts.update();
    if(i<7) {
        xyValues.push(data);
        xValues.push(data.x);
        yValues.push(data.y);
        charts.update();
    } else {
        xyValues.push(data);
        xValues.push(data.x);
        yValues.push(data.y);
        charts.update();
    }
}

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