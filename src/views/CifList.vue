<template>
  <div class="page_box">
    <fixedHeader></fixedHeader>
    <!-- 面包屑 -->
    <div class="mb_box">
      <router-link to="/">首页</router-link>
      <router-link :to="'/cifList/?type_one=' + $route.query.type_one"
        ><b>&gt;</b>{{ sel_one }}</router-link
      >
      <router-link v-show="sel_two" :to="'/cifList/?type_one=' + $route.query.type_one"
        ><b>&gt;</b>{{ sel_two }}</router-link
      >
    </div>
    <!-- 分类 -->
    <div class="cateBread">
      <span>{{ sel_one }}</span>
      <ul>
        <li @click="toCif(i)" v-for="(t, i) in two_goodsList" :key="i">
          {{ t.two_type }}
        </li>
      </ul>
    </div>
    <!--  -->
    <template v-for="(t, i) in two_goodsList" :key="i">
      <div class="category_title" ref="cat_cif">{{ t.two_type }}</div>
      <div class="category_good">
        <goodItem
          :good="tw"
          v-for="(tw, index) in t.list"
          :key="index"
        ></goodItem>
      </div>
    </template>
  </div>
</template>

<script>
import fixedHeader from "@/components/header/fixedHeader.vue";
import goodItem from "@/components/main/goodItem.vue";
export default {
  data() {
    return {
      two_goodsList: [],
      sel_one: "",
      sel_two: "",
    };
  },
  created() {
    this.init(this.$route.query.type_one);
  },
  methods: {
    // 初始化
    init(type_one) {
      // 获取二级分类
      this.sel_one = type_one;
      this.$Axios(this.$Apis.getTypeTwo + `?type_one=${type_one}`).then(
        (res) => {
          res.data.forEach((item) => {
            this.two_goodsList.push({
              two_type: item,
              list: [],
            });
            this.$Axios(
              this.$Apis.getTypeTwoList +
                `?type_one=${type_one}&type_two=${item}`
            ).then((res) => {
              this.two_goodsList.forEach((typeList) => {
                if (typeList.two_type == item) {
                  typeList.list = res.data;
                }
              });
            });
          });
          this.sel_two = res.data[0];
          console.log(this.two_goodsList);
        }
      );
    },
    // 跳到对应的高度
    toCif(index) {
      document.documentElement.scrollTop =
        this.$refs.cat_cif[index].offsetTop - 80;
    },
  },
  components: {
    fixedHeader,
    goodItem,
  },
  beforeRouteUpdate(to, from) {
    this.two_goodsList = [];
    this.init(to.query.type_one);
  },
};
</script>

<style scoped>
.mb_box {
  margin: 20px auto;
  color: #333;
}
.mb_box a {
  color: #333;
  font-size: 12px;
}
.mb_box b {
  margin: 0 8px 0 5px;
}
.cateBread {
  margin: 20px 0 30px;
  padding-left: 20px;
  line-height: 50px;
  background: #fff;
  display: flex;
}
.cateBread ul {
  display: inline-block;
  margin-left: 20px;
}
.cateBread li {
  margin-right: 30px;
  cursor: pointer;
}
.cateBread span,
.cateBread li {
  display: inline-block;
  font-size: 16px;
  color: gray;
  min-width: 32px;
}
.category_good {
  display: flex;
  flex-wrap: wrap;
}
.category_good a {
  margin-right: 20px;
  margin-bottom: 20px;
}
.category_good a:nth-child(4n) {
  margin-right: 0px;
}
.category_title {
  margin: 40px 0 20px;
  color: #333;
  font-size: 24px;
  text-align: center;
}
</style>