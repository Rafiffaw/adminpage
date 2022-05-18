import Chart from "chart.js";
import $ from 'jquery';

export const ChartGeneral = () => {
    $(function() {
    var statistics_chart = document.getElementById("myChart").getContext('2d');

    var myChart = new Chart(statistics_chart, {
        type: 'line',
        data: {
            labels: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
            datasets: [{
                label: 'Statistics',
                data: [0, 95, 50, 38, 20, 5, 30],
                borderWidth: 5,
                borderColor: '#6777ef',
                backgroundColor: 'transparent',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#6777ef',
                pointRadius: 6,
                
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                    },
                    ticks: {
                        stepSize: 10,
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                        color: '#fbfbfb',
                        lineWidth: 2
                    }
                }]
            },
            data: {
                fill: 1

            },
        }
    });
});
}

export default ChartGeneral;