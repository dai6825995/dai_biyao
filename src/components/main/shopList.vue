<template>
  <div class="shop_box">
    <h3>购物车(全部{{ shopTot }})</h3>
    <div v-if="!shopTot" class="zero"></div>
    <div v-if="shopTot">
      <div class="nav_info">
        <label
          ><input type="checkbox" v-model="isAll" @click="quanxuan" />全选
        </label>
        <span>商品信息</span>
        <span>单价</span>
        <span>数量</span>
        <span>金额</span>
        <span>操作 </span>
      </div>
      <div class="shop_item" v-for="shop in shopList" :key="shop.Id">
        <div>
          <input type="checkbox" :value="shop" v-model="selAll" />
        </div>
        <div class="img_box">
          <img :src="shop.imageUrl" alt="" />
          <p>{{ shop.title }}</p>
        </div>
        <div class="item_price">￥{{ shop.priceStr }}</div>
        <div class="item_num">
          <button @click="reduce(shop)">-</button>
          {{ shop.count }}
          <!-- 100 -->
          <button @click="shop.count++">+</button>
        </div>
        <div class="item_totlprices">
          ￥{{ shop.count * shop.priceStr * 1 }}
        </div>
        <div class="item_menu">
          <a @click="del(shop)">移除购物车</a>
        </div>
      </div>
    </div>
    <div class="shop_bottom" v-if="shopTot">
      <div>已购买<span>{{totalCount}}</span>件商品</div>
      <div>合计<span>￥{{totalPrice}}</span></div>
    </div>
    <div class="pay" v-if="shopTot">
        <div><img src="@\assets\images\zfbpay.jpg" alt=""></div>
        <div><img src="@\assets\images\wxpay.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAll: false,
      selAll: [],
    };
  },
  props: ["shopList"],
  computed: {
    shopTot() {
      return this.shopList.length;
    },
    totalCount() {
      let count = 0;
      this.selAll.forEach((element) => {
        count += element.count;
      });
      return count;
    },
    totalPrice() {
         let price = 0;
      this.selAll.forEach((element) => {
        price += element.count*element.priceStr*1;
      });
      return price;
    },
  },
  methods: {
    reduce(shop) {
      shop.count--;
      if (shop.count <= 0) {
        shop.count = 0;
        this.selAll.splice(this.selAll.indexOf(shop),1)
      }
    },
    quanxuan() {
      if (!this.isAll) {
        this.selAll = [...this.shopList];
      } else {
        this.selAll = [];
      }
    },
    del(shop){
        let userId=sessionStorage.getItem('userId')
        let goodId=shop.Id
        let token=sessionStorage.getItem('token')
        console.log(userId,goodId,token);
        this.$Axios(this.$Apis.del+`?userId=${userId}&goodId=${goodId}$token=${token}`).then(res=>{
            console.log(res);
        })
    }
  },
  watch: {
    selAll: {
      deep: true,
      handler(val) {
        this.isAll = val.length == this.shopList.length ? true : false;
      },
    },
  },
};
</script>

<style src='@\assets\css\shopList.css' scoped>
</style>