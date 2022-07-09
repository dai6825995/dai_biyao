<template>
  <ul class="rightBar" style="margin-left: 550px; display: block">
    <li @click="goTop" class="rightBar-top" style="display: block"></li>
  </ul>
</template>

<script>
export default {
  methods: {
    goTop() {
      let s = document.body.scrollTop || document.documentElement.scrollTop;
      let t = 200;
      let v = (s / t) * 16.7; //每一帧 位移的距离
      let tv = s; //用于 设置 scrollTop
      let timer = setInterval(() => {
        tv -= v;
        if (tv < 0) {
          tv = 0;
          clearInterval(timer);
        }
        document.body.scrollTop = tv;
        document.documentElement.scrollTop = tv;
      }, 16.7);
    },
  },
};
</script>

<style>
.rightBar {
  position: fixed;
  left: 50%;
  bottom: 100px;
  display: none;
  z-index: 101;
  margin-left: 550px;
  height: 144px;
  width: 120px;
}
.rightBar li {
  width: 48px;
  height: 48px;
  cursor: pointer;
  position: relative;
}
.rightBar-top {
  display: none;
  background: url(http://static3.biyao.com/pc/common/img/master/rightBar-top.png?v=biyao_43b4dc3)
    0 center no-repeat;
}
</style>