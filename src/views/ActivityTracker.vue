<template>
  <!-- Main container -->
  <div class="flex h-screen ml-24 px-8 py-4 bg-gray-900">
    <!-- First column -->
    <div class="w-2/3 flex flex-col px-8">
      <!-- Navigation bar -->
      <div class="flex justify-between text-red-50">
        <div class="flex items-center">
          <div>
            <i class="dx-icon-map dx-list-item-icon text-2xl"></i>
          </div>
          <p class="ml-4">
            <span class="font-bold">Seattle,</span>United States
          </p>
        </div>
        <div class="flex items-center">
          <button class="mr-6 p-4 rounded-full bg-gray-800 hover:bg-gray-400">
            <i class="dx-icon-bell dx-list-item-icon"></i>
          </button>
          <img
            class="w-12 h-12 rounded-full"
            src="../assets/logo.png"
            alt="profile image" />
        </div>
      </div>

      <!-- Activity Boxes -->
      <div class="mt-6">
        <div class="w-full flex text-center gap-4">
          <!-- Time box -->
          <div
            class="w-1/2 flex flex-col items-center py-4 bg-orange-100 rounded-2xl">
            <div>
              <i class="dx-icon-clock dx-list-item-icon text-2xl"></i>
            </div>
            <span class="my-2">Time</span>
            <span class="text-2xl font-bold">{{ activities.time }}</span>
          </div>
          <!-- Total distance box -->
          <div
            class="w-1/2 flex flex-col items-center py-4 bg-violet-200 rounded-2xl">
            <div>
              <i class="dx-icon-range dx-list-item-icon text-2xl"></i>
            </div>
            <span class="my-2">Total distance</span>
            <span class="text-2xl font-bold">{{
              activities.totalDistance
            }}</span>
          </div>
        </div>
        <!-- Bottom row of boxes -->
        <div class="w-full flex mt-6 gap-6 text-center">
          <!-- Energy burn box -->
          <div
            class="w-1/2 flex flex-col items-center py-4 bg-fuchsia-200 rounded-2xl">
            <div>
              <i class="dx-icon-runner dx-list-item-icon text-2xl"></i>
            </div>
            <span class="my-2">Energy burn</span>
            <span class="text-2xl font-bold">{{ activities.energyBurn }}</span>
          </div>
          <!-- Sleep box -->
          <div
            class="w-1/2 flex flex-col items-center py-4 bg-lime-50 rounded-2xl">
            <div>
              <i class="dx-icon-moon dx-list-item-icon text-2xl"></i>
            </div>
            <span class="my-2">Sleep</span>
            <span class="text-2xl font-bold">{{ activities.sleep }}</span>
          </div>
        </div>
      </div>

      <!-- Contact Boxes -->
      <div class="flex mt-10 gap-8 text-center">
        <!-- Contact box 1 -->
        <div
          class="w-1/3 flex flex-col items-center py-16 bg-gray-800 text-red-50 rounded-2xl">
          <div><i class="dx-icon-clock dx-list-item-icon text-2xl"></i></div>
          <div class="flex flex-col">
            <span class="pt-2">Contact</span>
            <div>
              <span class="font-bold">17 min</span>
              <i class="dx-icon-spinup dx-list-item-icon"></i>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="pt-2">Fight time</span>
            <div>
              <span class="font-bold">17 min</span>
              <i class="dx-icon-spindown dx-list-item-icon"></i>
            </div>
          </div>
        </div>
        <!-- Contact box 2 -->
        <div
          class="w-1/3 flex flex-col items-center py-16 bg-gray-800 text-red-50 rounded-2xl">
          <div><i class="dx-icon-clock dx-list-item-icon text-2xl"></i></div>
          <div class="flex flex-col">
            <span class="pt-2">Contact</span>
            <div>
              <span class="font-bold">17 min</span>
              <i class="dx-icon-spinup dx-list-item-icon"></i>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="pt-2">Fight time</span>
            <div>
              <span class="font-bold">17 min</span>
              <i class="dx-icon-spindown dx-list-item-icon"></i>
            </div>
          </div>
        </div>
        <!-- Contact box 3 -->
        <div
          class="w-1/3 flex flex-col items-center py-16 bg-gray-800 text-red-50 rounded-2xl">
          <div><i class="dx-icon-clock dx-list-item-icon text-2xl"></i></div>
          <div class="flex flex-col">
            <span class="pt-2">Contact</span>
            <div>
              <span class="font-bold">17 min</span>
              <i class="dx-icon-spinup dx-list-item-icon"></i>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="pt-2">Fight time</span>
            <div>
              <span class="font-bold">17 min</span>
              <i class="dx-icon-spindown dx-list-item-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Box -->
      <div class="w-full mt-6 p-4 bg-gray-800 text-red-50 rounded-2xl">
        <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-12 h-12 rounded-full"
              src="../assets/logo.png"
              alt="profile image" />
            <div class="ml-2">
              <p class="font-bold">Running with Kate</p>
              <div>
                <i class="dx-icon-event dx-list-item-icon"></i>
                <span class="ml-2">9 July, 2022</span>
              </div>
            </div>
          </div>
          <button class="py-2 px-4 bg-gray-600 rounded-full hover:bg-gray-400">
            View more
          </button>
        </div>
        <!-- Running progress -->
        <div class="text-center mt-4">
          <i class="dx-icon-runner dx-list-item-icon text-6xl"></i>
          <div class="w-full h-1 mx-auto bg-slate-500 rounded-xl">
            <div class="w-1/2 h-1 mx-auto bg-white rounded-xl"></div>
          </div>
          <p class="mt-6">Double Walking Time</p>
          <span>34 min</span>
        </div>
      </div>
    </div>

    <!-- Right Column -->
    <div class="w-1/3 p-6 bg-gray-800 text-red-50 rounded-2xl">
      <!-- Header -->
      <header class="flex items-center justify-between">
        <div>
          <h2>Activity Tracking</h2>
          <span>{{ formatDate(startDate) }}</span>
        </div>
        <button class="p-4 rounded-full bg-gray-700 hover:bg-gray-400">
          <i class="dx-icon-plus dx-list-item-icon"></i>
        </button>
      </header>

      <div class="grid grid-cols-7 gap-2 mt-6">
        <!-- Week days -->
        <template v-for="(day, index) in weekDays" :key="index">
          <div class="text-center font-semibold">{{ day }}</div>
        </template>
        <!-- Dates -->
        <template v-for="(date, index) in dates" :key="index">
          <div class="text-center">{{ date }}</div>
        </template>
      </div>

      <!-- Line Chart -->
      <div class="mt-10">
        <line-chart
          :dataSource="distanceDataSource"
          :coveredDistanceSource="coveredDistanceSource"></line-chart>

        <div class="flex justify-between mt-6">
          <div class="flex flex-col">
            <span class="text-lg font-bold">-5.6</span>
            <span>Done</span>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-bold">4.4</span>
            <span>Left</span>
          </div>
        </div>
      </div>

      <!-- Bar Chart -->
      <div class="mt-10 p-4 bg-gray-700 rounded-2xl">
        <div class="flex">
          <i class="dx-icon-clock dx-list-item-icon"></i>
          <div class="ml-2">
            <p class="font-bold">Total time</p>
            <span class="ml-2">2 h 45 m</span>
          </div>
        </div>

        <bar-chart :dataSource="weekDataSource"></bar-chart>
      </div>

      <!-- Total & Average Box -->
      <div class="w-full flex justify-center items-center mt-6 gap-4">
        <div class="w-1/2 py-4 text-center bg-gray-700 rounded-2xl">
          <div class="flex justify-center">
            <i class="dx-icon-range dx-list-item-icon"></i>
            <p>Total distance</p>
          </div>
          <span class="text-lg font-bold">10 km</span>
          <div
            class="w-24 h-24 flex justify-center items-center mt-2 mx-auto rounded-full border-2 border-gray-400">
            <span class="font-bold">5.6km</span>
          </div>
        </div>
        <div class="w-1/2 py-4 text-center bg-gray-700 rounded-2xl">
          <div class="flex justify-center">
            <i class="dx-icon-range dx-list-item-icon"></i>
            <p>Total distance</p>
          </div>
          <span class="text-lg font-bold">10 km</span>
          <div
            class="w-24 h-24 flex justify-center items-center mt-2 mx-auto rounded-full border-2 border-gray-400">
            <span class="font-bold">5.6km</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";
import BarChart from "../components/BarChart.vue";
import data from "../assets/db.json";

export default {
  name: "ActivityTracker",
  components: {
    LineChart,
    BarChart,
  },
  data() {
    return {
      startDate: new Date(),
      activities: data.activities,
      coveredDistanceSource: data.coveredDistanceSource,
      distanceDataSource: data.distanceDataSource,
      weekDataSource: data.weekDataSource,
    };
  },
  computed: {
    weekDays() {
      const weekDays = [];
      const currentDate = new Date(this.startDate);
      for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + i);
        const day = date.toLocaleDateString("en-US", { weekday: "short" });
        weekDays.push(day);
      }
      return weekDays;
    },
    dates() {
      const dates = [];
      const currentDate = new Date(this.startDate);
      for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + i);
        dates.push(date.getDate());
      }
      return dates;
    },
  },
  methods: {
    formatDate(date) {
      const options = { weekday: "long" };
      return date.toLocaleDateString("en-US", options);
    },
  },
};
</script>
