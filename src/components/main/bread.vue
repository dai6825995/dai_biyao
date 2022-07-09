<template>
  <div class="mb_box">
      <router-link to="/">首页</router-link>
      <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style >
.mb_box {
  margin: 20px auto;
  color: #333;
}
.mb_box a {
  color: #333;
  font-size: 12px;
}
.mb_box b {
  margin: 0 8px 0 5px;
}
</style>