<template>
  <section id="app">
    <!-- Top and Aside Menu Container -->
    <section id="navigators">
      <!-- Header Section -->
      <header class="app-main-header">
        <div class="wrapper">
          <!-- imported navbar -->
          <Navbar />
          <!--/ imported aside -->
        </div>
      </header>
      <!-- imported aside -->
      <Aside />
      <!--/ imported aside -->
    </section>
    <!--/ Top and Aside Menu Container -->
    <!-- App Main Container -->
    <section id="main-container">
    
      <Dashboard />

    </section>
    <!--/ App Main Container -->
  </section>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Aside from "./components/Aside.vue";

import Dashboard from './components/Dashboard';

export default {
  name: "App",
  components: {
    Aside,
    Navbar,
    Dashboard
    
  },
};
</script>

<style>

</style>
