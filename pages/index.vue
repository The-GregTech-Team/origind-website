<template>
  <div>

    <div class="container">
      <div class="section grey-text text-darken-4">
        <!--   Icon Section   -->
        <div class="row center">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center">
                <i class="material-icons">flash_on</i>
              </h2>
              <h5 class="center">游戏优化很差</h5>

              <p class="light">
                我们确保你不会遇到较大的性能问题.
                <br />(当然你得赞助
              </p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center">
                <i class="material-icons">group</i>
              </h2>
              <h5 class="center">玩家数量不多</h5>

              <p class="light">
                给你一个安静的游戏体验!
                <br />(没人当然安静
              </p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center">
                <i class="material-icons">settings</i>
              </h2>
              <h5 class="center">辣鸡的管理团队</h5>

              <p class="light">
                我们的技术团队可以有很多很多的黑科技.
                <br />管理团队很友善. (flowey的微笑
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="parallax-container valign-wrapper">
      <div class="section no-pad-bot">
        <div class="container">
          <div class="row center">
            <h5 class="header col s12 grey-text text-lighten-3">某个周目的GT化工线</h5>
          </div>
        </div>
      </div>
      <div class="parallax">
        <img src="~/assets/imgs/background2.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
  },
  mounted() {
    $(".parallax").parallax();
    if (
      navigator.userAgent.indexOf("MSIE") !== -1 ||
      navigator.userAgent.indexOf("Trident") !== -1
    )
      if (
        confirm(
          "检测到您正在使用IE11以下版本，为了您的浏览体验，是否更换为其他浏览器？"
        )
      )
        window.location.href = "https://browsehappy.com";
  }
};
</script>
