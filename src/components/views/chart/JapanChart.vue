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
          labels: [ '말하기', '듣기', '읽기', '쓰기'],
          datasets: [
          {
            label: '능력수치',
            backgroundColor: '#68cea0',
            hoverBackgroundColor: '#4f9978',
            data: [80, 60, 70, 50]
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