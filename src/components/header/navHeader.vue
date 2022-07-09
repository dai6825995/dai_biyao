<template>
  <div class="nav_header">
    <div class="page_box">
      <div class="nav_tit">
        <div class="nav_logo">
          <img src="@/assets/images/logo.png" alt="" height="51" />
        </div>
        <div class="nav_search">
          <serach v-model:sw="$store.state.search_word"></serach>
          <div>
            <ul class="nav_hotwords">
              <li
                @click="setSearch(word)"
                v-for="(word, index) in hostword"
                :key="index"
              >
                {{ word }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav_bottom">
        <router-link to="/index">首页</router-link>
        <router-link to="/index">每日上新</router-link>
        <a class="fengge"></a>
        <router-link to="/" class="liaojie">
          了解必要
          <div class="showAd">
            <p><img src="@/assets/images/兔.gif" width="200" alt="" /></p>
            <div>
              <p>关注必要微信公众号</p>
              <p>了解你想了解的一切</p>
              <p>小必姐在此发福利哦</p>
            </div>
          </div>
        </router-link>
        <router-link to="/index">购物车</router-link>
        <a class="fengge"></a>
        <router-link to="/index">个人中心</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import serach from "./serach.vue";
export default {
  data() {
    return {
      hostword: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$Axios("/classify/hotWord?callback=a").then((res) => {
        this.hostword = JSON.parse(
          /a\((.*?)\)/.exec(res.data)[1]
        ).data.hotwords;
      });
    },
    // 点击热词更改输入框，并跳转到搜索页面（未实现）
    setSearch(word) {
      this.$store.commit("setSearch_word", word)
    },
  },
  components:{
    serach,
  }
};
</script>

<style src="@\assets\css\navHeader.css" scoped>
</style>