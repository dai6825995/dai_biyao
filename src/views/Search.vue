<template>
  <div class="page_box">
    <bread>
      <a><b>&gt;</b>全部分类</a>
      <a><b>&gt;</b>{{ $route.query.search_word }}</a>
    </bread>
    <div class="cateBread">
      <span
        >根据您搜索的“{{ $route.query.search_word }}”，为您匹配到以下商品</span
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
        // console.log(res.data);
        this.searchList = res.data;
      });
    },
  },
  components: {
    bread,
    goodItem,
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