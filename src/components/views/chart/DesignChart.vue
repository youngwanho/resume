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
          labels: [ '포토샵', '일러스트', 'XD', '라이트룸'],
          datasets: [
          {
            label: '능력수치',
            backgroundColor: '#fd98a2',
            hoverBackgroundColor: '#cb6872',
            data: [80, 70, 70, 40]
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