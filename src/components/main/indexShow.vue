<template>
  <div class="page_box">
    <div class="index_title">
      <h3>热销排行</h3>
    </div>
    <showGoodsList></showGoodsList>
  </div>
</template>

<script>
import showGoodsList from "@/components/main/showGoodsList.vue";
export default {
  components: {
    showGoodsList,
  },
};
</script>

<style scoped>
.page_box {
  margin: 60px auto 30px;
}
.index_title {
  background: #fff;
  height: 80px;
  text-align: center;
}
.index_title h3 {
  font-size: 18px;
  line-height: 25px;
  margin-top: 20px;
  padding-bottom: 4px;
  border-bottom: 1px solid #bbb;
  display: inline-block;
}
</style>