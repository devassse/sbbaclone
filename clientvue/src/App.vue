<template>
  <div id="app">
    <!-- Top and Aside Menu Container -->
    <section>
      <!-- Header Section -->
      <header class="app-main-header">
        <div class="wrapper">
          <!-- imported navbar -->
          <navbar />
          <!--/ imported aside -->
        </div>
      </header>
      <!-- imported aside -->
      <aside />
      <!--/ imported aside -->
    </section>
    <!--/ Top and Aside Menu Container -->

    <img
      alt="Vue logo"
      src="./assets/imgs/logos/sb-shield-02.png"
      style="width: 20%"
    />
    <HelloWorld msg="Lorem ipsum dolor sit amet" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import Aside from "./components/Aside.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Aside,
    Navbar,
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
