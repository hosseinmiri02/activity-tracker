<template>
  <!-- Main container -->
  <div class="h-full flex justify-center items-center">
    <!-- Drawer component -->
    <div
      class="w-30 fixed top-0 bottom-0 left-0 flex flex-col justify-between bg-gray-800 rounded-r-2xl">
      <!-- Drawer content -->
      <DxDrawer template="list" class="mt-10">
        <!-- Drawer items -->
        <div class="flex flex-col items-center text-gray-400">
          <!-- Drawer header icon -->
          <div class="mb-4">
            <i class="dx-icon-product dx-list-item-icon text-4xl"></i>
          </div>
          <!-- Drawer links -->
          <router-link
            v-for="(route, index) in routes"
            :key="index"
            :to="route.path"
            class="w-full p-4 group">
            <!-- Link icon -->
            <i
              :class="
                'dx-icon-' +
                route.icon +
                ' dx-list-item-icon mr-2 text-gray-400 group-hover:text-red-50'
              "></i>
            <!-- Link text -->
            <span class="text-gray-400 group-hover:text-red-50">{{
              route.name
            }}</span>
          </router-link>
        </div>
      </DxDrawer>
      <!-- Logout button -->
      <button class="mb-10 text-gray-400 hover:text-red-50">
        <i class="dx-icon-close dx-list-item-icon mr-4"></i>Log Out
      </button>
    </div>
  </div>
</template>

<script>
// Importing necessary component
import DxDrawer from "devextreme-vue/drawer";

export default {
  // Component name
  name: "App",
  // Registering components
  components: {
    DxDrawer,
  },
  // Component data
  data() {
    return {
      // Route data for drawer links
      routes: [
        { path: "/", name: "Overview", icon: "home" },
        { path: "/", name: "Competition", icon: "runner" },
        { path: "/", name: "Timer", icon: "clock" },
        { path: "/", name: "Energy", icon: "coffee" },
        { path: "/", name: "Calendar", icon: "event" },
        { path: "/", name: "Distances", icon: "info" },
        { path: "/", name: "Profilo", icon: "user" },
        { path: "/", name: "Settings", icon: "preferences" },
      ],
    };
  },
};
</script>
