<template>
  <div class="page">
    <navHeader></navHeader>
    <router-view />
    <goTop></goTop>
    <foot ref="foot"></foot>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
a {
  color: black;
  text-decoration: none;
}
body {
  background-color: #f9f9f9;
}
.page {
  // overflow: hidden;
  width: 100%;
}
.page_box {
  width: 1080px;
  min-width: 1080px;
  margin: 0 auto;
}
ul,
ol,
li,
dl {
  border: 0;
  list-style: none;
}
.clearfix:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
}
</style>

<script>
import navHeader from "@/components/header/navHeader.vue";
import foot from "@/components/foot/foot.vue";
import goTop from "@/components/goTop.vue";
export default {
  components: {
    navHeader,
    foot,
    goTop,
  },
};
</script>