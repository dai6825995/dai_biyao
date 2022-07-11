<template>
  <div class="section-editor clearfix">
    <div class="editor-main">
      <div class="editor-picture clearfix">
        <p>
          <img :src="good.imgtit" ref="imgtitle" />
        </p>
        <ul>
          <li
            :class="[index == num ? 'main-active' : '']"
            v-for="(img, index) in good.imgs"
            :key="index"
            @click="setNum(img, index)"
          >
            <img :src="img" />
          </li>
        </ul>
      </div>
      <ul class="editor-policy clearfix">
        <li>
          <span>7天无忧退货</span>
          <div>
            <i></i
            >根据国家七天无理由退货规范，为您办理退货退款，具体退货政策见商品详情页。
          </div>
        </li>

        <li>
          <span>先行赔付</span>
          <div><i></i>争议可申诉，申诉成功，立即退款。</div>
        </li>

        <li>
          <span>超时赔偿</span>
          <div>
            <i></i
            >未按承诺时间发货，系统自动赔付（赔款金额为订单商品金额的30%，上限500元）。
          </div>
        </li>

        <li>
          <span>顺丰包邮</span>
          <div><i></i>运费由商家承担</div>
        </li>
      </ul>
    </div>
    <div class="editor-panel sku">
      <div class="panel-top">
        <h1>{{ good.title }}</h1>
        <p>{{ good.salePoint }}</p>
        <span
          class="manufacturer"
          isshow="1"
          routertype="1"
          routerurl=""
          supplierid="130108"
        >
          <i id="poiLink"></i>
          {{ good.supplier }}
        </span>
      </div>
      <ul class="panel-main">
        <li class="panel-press">
          <span>售价</span>
          <div>
            <span class="panel-maney"
              >￥<i>{{ good.priceStr }}</i></span
            >
            <span class="panel-duration"
              >生产周期：<span>{{ good.leadTime }}</span
              >天
            </span>
          </div>
        </li>
        <li class="panel-press panel_but">
          <button @click="addShop(good.Id)">添加到购物车</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["good"],
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    setNum(imgsrc, index) {
      this.num = index;
      this.$refs.imgtitle.src = imgsrc;
    },
    addShop(Id) {
      let token = sessionStorage.getItem("token");
      let userId = sessionStorage.getItem("userId");
      this.$Axios(
        this.$Apis.add + `?goodId=${Id}&userId=${userId}&token=${token}`
      ).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style src='@\assets\css\detailTitle.css' scoped>
</style>