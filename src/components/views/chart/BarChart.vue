<template>
    <Bar
      id="my-chart-id"
      class=""
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ '개발', '디자인', '일본어', '사무'],
          datasets: [
          {
            label: '능력수치',
            backgroundColor: '#5558c9',
            hoverBackgroundColor: '#3d3d79',
            data: [80, 60, 50, 20]
          }
        ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>