<template>
  <navigation-list></navigation-list>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavigationList from "./components/NavigationList.vue";

export default {
  name: "App",
  components: {
    NavigationList,
  },
  data() {
    return {
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
