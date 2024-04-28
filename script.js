const pie = document.getElementById('pie_chart');
const bar = document.getElementById('bar_chart');
//円グラフここから
  new Chart(pie, {
    type: 'pie',
    data: {
      labels: ['Webデザイナー', 'Webディベロッパー', 'サーバーエンジニア', '営業職'],
      datasets: [{
        backgroundColor: [
          "#2d3374",
          "#3a7edf",
          "#9bcbf8",
          "#bbb"
        ],
        data: [14, 9, 8, 6],
      }]
    },
    plugins: [ChartDataLabels], // pluginとしてchartdatalabelsを追加
    options: {
      responsive: true,
      plugins:{
        legend: {
          display: false,
        },
        datalabels:{// パーセンテージからラベル表記に変更
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex];
          },
          //フォントと色の設定
          color:"#fff",
          font:{
            size: 13,
          }
        }
      }
    }
  });
//円グラフここまで
//棒グラフここから
new Chart(bar,{
  type: 'bar',
  data:{
    labels: ['2018年', '2019年', '2020年'],
    datasets:[{
    backgroundColor:[
      "#3a7edf"
    ],
    data: [10, 16, 29],
    }]
  },
  options: {
    responsive: true,
    plugins:{
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true, // 0から始める
          callback: (value) => `${value}人`,
        }
      }
    }
  },
});
//棒グラフここまで