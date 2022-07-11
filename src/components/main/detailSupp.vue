<template>
  <div class="view-supplier">
    <div class="supplier-info clearfix">
      <div class="supplier-logo">
        <a>
          <img :src="good.addressLogo" />
        </a>
      </div>
      <ul class="supplier-other">
        <li>商品质量：<i>5.0</i></li>
        <li>服务态度：<i>5.0</i></li>
      </ul>
    </div>
    <a @click="goSupp(good)" class="supplier-into">进店看看</a>
    <ul class="supplier-recommen">
      <li v-for="item in detaiSupp" :key="item.Id">
        <a @click="reload(item.Id)">
          <i><img :src="item.imageUrl" /></i>
          <div class="title">{{ item.title }}</div>
          <div class="priceBox">
            <div class="price" :price="item.priceStr">
              <span style="color: #f7a701; font-size: 12px; padding-left: 2px"
                >￥<span style="font-size: 18px">{{
                  item.priceStr
                }}</span></span
              >
            </div>
          </div>
          <div class="evaluate">{{ item.evaluate }}条好评</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["good", "detaiSupp"],
  methods: {
    reload(goodId) {
      this.$emit("init", goodId);
      document.documentElement.scrollTop = 0;
    },
    goSupp(item) {
      this.$router.push({
        name: "supplier",
        params: {
          supp: item.supplier,
          addressName:item.addressName,
          imgsrc: item.addressLogo,
        },
      });
    },
  },
};
</script>

<style scoped>
.view-supplier {
  float: left;
  width: 241px;
  border: 1px solid #ccc;
  border-top: 0;
  padding: 20px;
}
.supplier-logo {
  margin-right: 10px;
  border: 1px solid #ccc;
  width: 76px;
  height: 76px;
  display: inline-block;
}
.supplier-logo img {
  width: 76px;
  height: 76px;
}
.supplier-info {
  display: flex;
  font-size: 12px;
}
.supplier-info ul {
  padding-top: 18px;
  float: right;
  margin-right: 30px;
}
.supplier-info li {
  margin-bottom: 10px;
  color: #333;
  font: 12px;
}
.supplier-info i {
  color: #f7b200;
}
.supplier-into {
  display: block;
  width: 200px;
  height: 40px;
  margin-top: 20px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  background: #f7b200;
  cursor: pointer;
}
.supplier-recommen {
  overflow: hidden;
}
.supplier-recommen li {
  margin-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.supplier-recommen a {
  display: block;
}
.supplier-recommen i {
  display: block;
  width: 200px;
  height: 200px;
}
.supplier-recommen img {
  width: 100%;
  height: 100%;
}
.supplier-recommen .supplier {
  font-size: 12px;
  line-height: 17px;
  color: #bf9e6b;
  margin-top: 10px;
}
.supplier-recommen .title {
  font-size: 14px;
  line-height: 19px;
  color: #4a4a4a;
  margin-top: 5px;
}
.supplier-recommen .priceBox {
  font-size: 14px;
  line-height: 25px;
  height: 25px;
  color: #4a4a4a;
  margin-top: 10px;
  display: flex;
}
.supplier-recommen .priceBox .price {
  margin-right: 5px;
}
.supplier-recommen .evaluate {
  font-size: 12px;
  line-height: 17px;
  color: #bbb;
  margin-top: 10px;
}
.supplier-recommen li:last-child {
  border: 0;
}
a {
  cursor: pointer;
}
</style>