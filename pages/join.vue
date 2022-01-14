<template>
  <div class="blue lighten-1">
    <nav-bar></nav-bar>
    <div id="banner">
      <div class="container">
        <div class="section">
          <div id="index-banner">
            <div class="section no-pad-bot no-pad-top" style="width:100%">
              <div class="container">
                <h1 class="header center grey-text text-lighten-3">加入我们</h1>
                <div class="row center">
                  <h5 class="header col s12 grey-text text-lighten-2">你有几种方法参加到我们的服务器:</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section grey-text text-darken-4">
          <!--   Icon Section   -->
          <div class="row center">
            <div class="col s12 m6 white-text">
              <div class="icon-block">
                <h2 class="center">
                  <i class="material-icons">sms</i>
                </h2>
                <h5 class="center">QQ群</h5>

                <p class="light">我们的QQ审核群: 307027501</p>
              </div>
            </div>

            <div class="col s12 m6">
              <div class="icon-block">
                <h2 class="center">
                  <i class="material-icons">cloud_download</i>
                </h2>
                <h5 class="center">下载客户端</h5>

                <p class="light">
                  <a
                    href="https://pan.suripe.cf"
                    id="download-button"
                    class="btn-large waves-effect waves-light orange darken-1"
                  >转至下载页面</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>
<style scoped>
#banner {
  background-image: url("/assets/imgs/multiplayer-screenshot.jpg");
}
</style>
<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import MainBanner from "~/components/MainBanner";
export default {
  data() {
    return {};
  },
  components: {
    "nav-bar": Navbar,
    "footer-bar": Footer,
    "main-banner": MainBanner
  },
  mounted() {
    $(".parallax").parallax();
  },
  methods: {
    toCOS(file) {
      return "//origind-1251214188.cossh.myqcloud.com/" + file;
    }
  }
};
</script>
