//円グラフここから
const ctx = document.getElementById('pie_chart');

  new Chart(ctx, {
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
