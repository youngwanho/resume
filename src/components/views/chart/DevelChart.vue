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
          labels: [ 'HTML', 'Css', 'J-Query', 'JAVA Script', 'VUE.js'],
          datasets: [
          {
            label: '능력수치',
            backgroundColor: '#637dd7',
            hoverBackgroundColor: '#4d61a8',
            data: [95, 90, 70, 60, 70]
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