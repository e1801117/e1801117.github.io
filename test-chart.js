var labels = ['札幌市', '仙台市', 'さいたま市', '千葉市', '横浜市', '川崎市', '相模原市', '新潟市', '静岡市', '浜松市', '名古屋市', '京都市', '大阪市', '堺市', '神戸市', '岡山市', '広島市', '北九州市', '福岡市', '熊本市'];

var data = {
    labels: labels,
    datasets: [{
        label: '各市の人口',
        borderColor: 'rgb(130, 60, 70)',
        backgroundColor: 'rgb(255, 100, 130)',
        data: [1976257, 1097392, 1330286, 977693, 3779391, 1541772, 718219, 789715, 691810, 797300, 2328431, 1455377, 2756239, 823029, 1521241, 718635, 1195085, 961286, 1619783, 739554],

    }]
};

var config = {
    type: 'line',
    data,
    options: {},
}

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config,
);