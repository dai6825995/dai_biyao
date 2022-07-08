<template>
  <div class="page">
    <navHeader></navHeader>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
a{
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
</style>

<script>
import navHeader from "@/components/navHeader.vue";
export default {
  components: {
    navHeader,
  },
};
</script>