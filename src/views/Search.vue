<template>
  <div class="page_box">
    <fixedHeader></fixedHeader>
    <bread>
      <a><b>&gt;</b>全部分类</a>
      <a><b>&gt;</b>{{ $route.query.search_word }}</a>
    </bread>
    <div class="cateBread">
      <span v-if="searchList.length > 0"
        >根据您搜索的“{{ $route.query.search_word }}”，为您匹配到以下商品</span
      >
      <span v-else
        >根据您搜索的“{{ $route.query.search_word }}”未匹配到商品</span
      >
    </div>
    <div class="search_box">
      <goodItem
        :good="good"
        v-for="good in searchList"
        :key="good.Id"
        class="search_item"
      ></goodItem>
    </div>
  </div>
</template>

<script>
import goodItem from "@/components/main/goodItem.vue";
import bread from "../components/main/bread.vue";
import fixedHeader from "@/components/header/fixedHeader.vue";
export default {
  created() {
    this.init();
  },
  data() {
    return {
      searchList: [],
    };
  },
  methods: {
    init() {
      this.$Axios(
        this.$Apis.search + `?word=${this.$route.query.search_word}`
      ).then((res) => {
        this.searchList = res.data;
      });
    },
  },
  components: {
    bread,
    goodItem,
    fixedHeader,
  },
  watch: {
    $route() {
      this.searchList = "";
      this.init();
    },
  },
};
</script>

<style scoped>
.search_box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.search_item {
  margin-bottom: 20px;
}
.cateBread {
  margin: 20px 0 30px;
  padding-left: 20px;
  line-height: 50px;
  background: #fff;
  display: flex;
}
.cateBread span {
  display: inline-block;
  font-size: 16px;
  color: gray;
  min-width: 32px;
}
</style>