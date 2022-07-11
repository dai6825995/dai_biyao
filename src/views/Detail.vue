<template>
  <div class="page_box">
    <bread>
      <a><b>&gt;</b>{{ detailList.title }}</a>
    </bread>
    <!-- 商品信息 -->
    <detailTitle :good="detailList"></detailTitle>
    <!-- 店家&商品详情&评价 -->
    <div class="section-view">
      <detailNav :good="detailList"></detailNav>
    </div>
    <div class="view-section clearfix">
      <detailSupp
        @init="init"
        :good="detailList"
        :detaiSupp="detaiSupp"
      ></detailSupp>
      <div class="view-main clearfix">
        <router-view :good='detailList'  v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import bread from "@/components/main/bread.vue";
import detailTitle from "@/components/main/detailTitle.vue";
import detailNav from "@/components/main/detailNav.vue";
import detailSupp from "@/components/main/detailSupp.vue";
export default {
  data() {
    return {
      detailList: "",
      detaiSupp: [],
    };
  },
  created() {
    this.init(this.$route.query.goodId);
  },
  methods: {
    init(goodId) {
      //商品详情
      this.$Axios(this.$Apis.detail + `?goodId=${goodId}`).then((res) => {
        res.data[0].imgs = JSON.parse(res.data[0].imgs);
        res.data[0].address = JSON.parse(res.data[0].address);
        res.data[0].description = JSON.parse(res.data[0].description);
        res.data[0].descriptionImage = JSON.parse(res.data[0].descriptionImage);
        res.data[0].comment = JSON.parse(res.data[0].comment);
        res.data[0].imgtit = res.data[0].imgs[0];
        res.data[0].commentTol = res.data[0].comment.length;
        this.detailList = res.data[0];
        console.log(res);
        // 店内商品
        this.$Axios(
          this.$Apis.sameList + `?supplier=${this.detailList.supplier}`
        ).then((res) => {
          // console.log(res.data);
          this.detaiSupp = res.data;
        });
      });
    },
  },
  components: {
    bread,
    detailTitle,
    detailNav,
    detailSupp,
  },
};
</script>

<style scoped>
.section-view {
  position: relative;
  margin-top: 40px;
  padding-top: 60px;
}
.view-main {
  float: left;
  width: 800px;
  padding: 40px 0 0 38px;
}
</style>