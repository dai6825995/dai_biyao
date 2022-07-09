<template>
  <a>
    <i
      ><img
        v-lazy="{
          loadingimg: 'http://192.168.205.100:8080/img/%E5%85%94.2f8a719d.gif',
          src: good.imageUrl,
        }"
        alt=""
    /></i>
    <div class="supplier">{{ good.supplier }}</div>
    <div class="title">{{ good.title }}</div>
    <div class="priceBox">
      <div class="price" :price="good.priceStr">
        <span style="color: #f7a701; font-size: 12px; padding-left: 2px"
          >￥<span style="font-size: 18px">{{ good.priceStr }}</span></span
        >
      </div>
      <div class="mack" v-html="good.mack"></div>
    </div>
    <div class="evaluate">{{ good.evaluate }}条好评</div>
  </a>
</template>

<script>
export default {
  props: ["good"],
};
</script >

<style scoped>
a {
  display: block;
  width: 255px;
  text-align: center;
  height: 383px;
  background: #fff;
  transition: box-shadow 0.5s ease-in-out 0s;
}
a:hover {
  box-shadow: 0 1px 10px 4px rgb(0 0 0 / 5%);
}
i {
  display: inline-block;
  width: 255px;
  height: 255px;
  overflow: hidden;
}
img {
  width: 255px;
  height: 255px;
  transition: transform 0.5s ease-in-out 0s;
}
.supplier {
  font-size: 12px;
  line-height: 17px;
  color: #bf9e6b;
  margin-top: 10px;
}
.supplier,
.title,
.priceBox,
.evaluate {
  text-align: left;
  padding-left: 20px;
}
.title {
  font-size: 14px;
  line-height: 19px;
  color: #4a4a4a;
  margin-top: 5px;
}
.priceBox {
  font-size: 14px;
  line-height: 25px;
  height: 25px;
  color: #4a4a4a;
  margin-top: 10px;
  display: flex;
}
.evaluate {
  font-size: 12px;
  line-height: 17px;
  color: #bbb;
  margin-top: 10px;
}
.priceBox .price {
  margin-right: 5px;
}
</style>