<template>
  <div class="text-gray-400 text-xs">
    <div class="p-2">
      <p>Total Shipments</p>
      <h2 class="text-lg text-gray-200">Performance</h2>
      <div class="grid grid-cols-1 gap-4">
        <div class="h-64 bg-[#222435] rounded">
          <Line :data="chartData" :options="chartOptions" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="h-72 bg-[#222435] rounded sm:col-span-1">
            <h3 class="text-sm text-gray-300 mb-2">Product Sales</h3>
            <Bar :data="barChartData" :options="chartOptions" />
          </div>
          <div class="h-72 bg-[#222435] rounded">
            <h3 class="text-sm text-gray-300 mb-2">Product Sales</h3>
            <Pie :data="pieChartData" :options="chartOptions" />
          </div>
          <div class="h-72 bg-[#222435] rounded">
            <h3 class="text-sm text-gray-300 mb-2">Product Sales</h3>
            <Doughnut :data="doughnutChartData" :options="chartOptions" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarController,
} from "chart.js";
import { Line, Pie, Doughnut, Bar } from "vue-chartjs";

ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  components: { Line, Pie, Doughnut, Bar },
  data() {
    return {
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Course Progress (%)",
            backgroundColor: "#3b82f6",
            borderColor: "#3b82f6",
            data: [20, 45, 60, 90, 75, 85, 95, 100, 80, 70, 60, 50],
            fill: false,
          },
          {
            label: "Target Progress (%)",
            backgroundColor: "#10b981",
            borderColor: "#10b981",
            data: [30, 50, 65, 85, 80, 90, 100, 95, 85, 75, 65, 55],
            fill: false,
          },
        ],
      },
      barChartData: {
        labels: ["Product A", "Product B", "Product C", "Product D"],
        datasets: [
          {
            label: "Sales",
            backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
            data: [150, 200, 100, 250],
          },
        ],
      },
      pieChartData: {
        labels: ["Category 1", "Category 2", "Category 3"],
        datasets: [
          {
            label: "Distribution",
            backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
            data: [40, 35, 25],
          },
        ],
      },
      doughnutChartData: {
        labels: ["Segment A", "Segment B", "Segment C", "Segment D"],
        datasets: [
          {
            label: "Segments",
            backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
            data: [25, 25, 30, 20],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
            },
          },
          y: {
            title: {
              display: true,
              text: "Progress (%)",
            },
            min: 0,
            max: 120,
          },
        },
      },
    };
  },
};
</script>
