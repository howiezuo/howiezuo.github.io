'use strict';

function drawCharts() {
    var data = google.visualization.arrayToDataTable([
        ['Exp', 'Level'],
        ['Web', 9],
        ['Android', 8],
        ['iOS', 3]
    ]);
    var chart = new google.visualization.PieChart(document.getElementById('exp-chart'));
    chart.draw(data, {
        backgroundColor: '#222222',
        fontSize: 16,
        legend: 'none',
        pieSliceText: 'label',
        tooltip: {trigger: 'none'}
    });
}
google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawCharts);
