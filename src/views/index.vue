<template>
  <div class="page_box">
    <fixedHeader></fixedHeader>
    <!-- 轮播导航区 -->
    <indexClassify></indexClassify>
    <!-- 商品区 -->
    <indexShow></indexShow>
  </div>
</template>

<script>
import indexClassify from "@/components/main/indexClassify.vue";
import indexShow from "@/components/main/indexShow.vue";
import fixedHeader from "@/components/header/fixedHeader.vue";
export default {
  components:{
    indexClassify,
    indexShow,
    fixedHeader,
  }
};
</script>

<style>
</style>