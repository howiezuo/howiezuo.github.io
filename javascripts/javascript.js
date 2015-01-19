'use strict';

function drawCharts() {
    var langData = google.visualization.arrayToDataTable([
        ['Language', 'Level'],
        ['中文', 10],
        ['English', 5],
        ['日本語', 8]
    ]);
    var langChart = new google.visualization.PieChart(document.getElementById('lang-chart'));
    langChart.draw(langData, {
        backgroundColor: '#222222',
        fontSize: 16,
        legend: 'none',
        pieSliceText: 'label'        
    });
}
google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawCharts);
