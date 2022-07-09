<template>
  <div class="item_box">
    <div class="goods" v-for="good in goodsList" :key="good.Id">
      <a href="#">
        <div class="goods_img">
          <img
            v-lazy="{
              loadingimg:
                'http://192.168.205.100:8080/img/%E5%85%94.2f8a719d.gif',
              src: good.imageUrl,
            }"
            alt=""
          />
        </div>
        <div class="goods_info">
          <div class="priceBox">
            <div class="price" :price="good.priceStr">
              <span style="color: #f7a701; font-size: 10px; padding-left: 2px">
                ￥
                <span style="font-size: 16px">{{ good.priceStr }}</span>
              </span>
            </div>
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
          <div class="supplier">{{ good.salePoint }}</div>
          <div class="content">
            {{ good.title }}
            <span class="evaluate">{{ good.evaluate }}条好评</span>
          </div>
        </div>
      </a>
    </div>
    <div ref="bottom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
      page: 1,
    };
  },
  created() {
    this.init();
    // 监听滚动
    window.addEventListener("scroll",this.wScorll);
  },
  methods: {
    init() {
      this.$Axios(this.$Apis.hotList + `?page=${this.page}`).then((res) => {
        res.data.forEach((item) => {
          item.labels = JSON.parse(item.labels);
          this.goodsList.push(item);
        });
      });
    },
    // 滚动事件
    wScorll() {
      let wh = window.innerHeight;
      let st = document.documentElement.scrollTop || document.body.scrollTop;
      let ot = this.$refs.bottom.offsetTop;
      if (wh + st >= ot - 100) {
        this.page++;
        if (this.page <= 6) {
          this.init();
        }
      }
    },
  },
  unmounted() {
    window.removeEventListener("scroll",this.wScorll);
  },
};
</script>

<style scoped>
.item_box {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods {
  width: 530px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #fff;
  height: 375px;
}
.goods_info {
  height: 103px;
  padding-left: 20px;
  overflow: hidden;
}
.goods_img > img {
  width: 530px;
  height: 272px;
}
.priceBox {
  display: flex;
  color: #f7a701;
  margin-top: 10px;
  line-height: 22px;
}
.price {
  font-size: 16px;
  margin-right: 12px;
}
span {
  font-weight: 400;
}
.mack {
  line-height: 20px;
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
.supplier {
  font-size: 12px;
  line-height: 18px;
  color: #bf9e6b;
  margin-top: 6px;
}
.content {
  font-size: 14px;
  color: #4a4a4a;
  line-height: 20px;
  margin-top: 8px;
}
.evaluate {
  font-size: 12px;
  color: #bbb;
  float: right;
  margin-right: 20px;
}
</style>