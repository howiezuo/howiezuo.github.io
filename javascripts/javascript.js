var languageData = {
    labels: ["Japanese", "English", "Chinese"],
    datasets: [
        {
            label: "Languages",
            fillColor: "rgba(220, 220, 220, 0.5)",
            strokeColor: "rgba(220, 220, 220, 0.8)",
            highlightFill: "rgba(220, 220, 220, 0.75)",
            highlightStroke: "rgba(220, 220, 220, 1)",
            data: [7, 5, 10]
        }
    ]
};

var languageCtx = document.getElementById("language-chart").getContext("2d");
var languageChart = new Chart(languageCtx).Bar(languageData, {
    scaleShowLabels: false,
    showTooltips: false,
    scaleShowGridLines: false    
});


var plData = {
    labels: ["Java", "PHP", "JavaScript", "Objective-C", "Git/GitHub", "Node.js", "Swift"],
    datasets: [
        {
            label: "Program languages",
            fillColor: "rgba(220, 220, 220, 0.5)",
            strokeColor: "rgba(220, 220, 220, 0.8)",
            pointColor: "rgba(220, 220, 220, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220, 220, 220, 1)",
            data: [9, 9, 8, 5, 8, 7, 6]
        }
    ]
};
var plCtx = document.getElementById("pl-chart").getContext("2d");
var plChart = new Chart(plCtx).Radar(plData, {
    
});


var skillData = [
    {
        value: 4,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Web"
    },
    {
        value: 4,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Android"
    },
    {
        value: 2,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "iPhone"
    }
];

var skillCtx = document.getElementById("skill-chart").getContext("2d");
var skillChart = new Chart(skillCtx).Pie(skillData, {
});
