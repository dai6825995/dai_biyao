<template>
  <div class="page_box">
    <bread>
      <a><b>&gt;</b>购物车</a>
    </bread>
    <shopList :shopList="shopList"></shopList>
  </div>
</template>

<script>
import bread from "@/components/main/bread.vue";
import shopList from "@/components/main/shopList.vue";
export default {
  data() {
    return {
      shopList: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let token = sessionStorage.getItem("token");
      let userId = sessionStorage.getItem("userId");
      this.$Axios(
        this.$Apis.shopList + `?token=${token}&userId=${userId}`
      ).then((res) => {
        this.shopList = res.data;
        console.log(res.data);
      });
    },
  },
  components: {
    bread,
    shopList,
  },
};
</script>

<style>
</style>