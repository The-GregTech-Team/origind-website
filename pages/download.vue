<template>
  <div class="blue lighten-1">
    <nav-bar></nav-bar>
    <updates :versions="versions"></updates>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import MainBanner from "~/components/MainBanner";
import Updates from "~/components/Updates";
export default {
  components: {
    "nav-bar": Navbar,
    "footer-bar": Footer,
    "main-banner": MainBanner,
    updates: Updates
  },
  mounted() {
    $(".parallax").parallax();
  },
  methods: {}
};
</script>
