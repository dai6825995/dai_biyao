<template>
  <router-link :to="'/detail?goodId='+good.Id">
    <div class="words">
      <div class="supplier">{{ good.supplier }}</div>
      <div class="title">{{ good.title }}</div>
      <div class="price" :price="good.priceStr">
        <span style="color: #f7a701; font-size: 18px; padding-left: 2px"
          >￥<span style="font-size: 24px">{{ good.priceStr }}</span></span
        >
      </div>
      <div class="salePoint">
        {{ good.salePoint }}
      </div>
      <div class="evaluate"></div>
      <div class="mack">
        <span
          v-for="(s, index) in good.labels"
          :style="{
            color: '#fff',
            background: s.roundColor,
            borderColor: s.color,
          }"
          :key="index"
        >
          {{ s.content }}
        </span>
      </div>
    </div>
    <img
      :src=good.imageUrl
    />
  </router-link>
</template>

<script>
export default {
  props: ["good"],
};
</script>

<style scoped>
a {
  display: flex;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
}
.words {
  width: 430px;
  height: 335px;
  background: #fff;
  overflow: hidden;
  text-align: center;
}
.supplier {
  font-size: 14px;
  color: #bf9e6b;
  margin-top: 64px;
  line-height: 20px;
}
.title {
  font-size: 18px;
  color: #4a4a4a;
  margin-top: 22px;
  line-height: 25px;
}
.price {
  height: 33px;
  line-height: 33px;
  margin-top: 15px;
  font-size: 22px;
  color: #f7a701;
  width: 260px;
  margin-left: 85px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f2f2f2;
}
.salePoint {
  font-size: 16px;
  color: gray;
  margin-top: 28px;
  line-height: 22px;
  width: 288px;
  margin-left: 71px;
}
.evaluate {
  font-size: 12px;
  color: #bbb;
  margin-top: 30px;
  line-height: 17px;
}
img {
  float: left;
  width: 650px;
  height: 335px;
}
img {
  vertical-align: middle;
  border: 0;
}
.mack {
  position: absolute;
  top: 10px;
  left: 8px;
}
.mack span {
  font-size: 10px;
  border-radius: 2px;
  color: #fff;
  padding: 0 2px;
  height: 16px;
  line-height: 13px;
  display: inline-block;
  margin-left: 5px;
  border: 1px solid #fff;
  box-sizing: border-box;
}
</style>