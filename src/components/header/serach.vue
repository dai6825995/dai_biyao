<template>
  <div class="nav_search">
    <input
      type="text"
      placeholder="请输入要搜索的商品"
      v-model="$store.state.search_word"
    />
    <span class="nav_search_img"></span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav_search {
  position: relative;
  z-index: 2;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: #fff;
}
.nav_search input {
  width: 422px;
  height: 38px;
  padding-left: 10px;
  border: 0;
  line-height: 38px;
  color: #bbb;
  font-size: 14px;
  border-radius: 3px;
  vertical-align: middle;
  outline: 0;
}

.nav_search > div:first-of-type {
  position: relative;
  z-index: 2;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: #fff;
}

.nav_search_img {
  display: inline-block;
  width: 39px;
  height: 38px;
  border-left: 1px solid #ccc;
  vertical-align: middle;
  background: url("@/assets/images/search.png") center center no-repeat;
  cursor: pointer;
}
</style>