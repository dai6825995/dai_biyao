<template>
    <ul class="banner_list">
      <li class="banner_main" v-for="(item, index) in banner_list" :key="index">
        <p>
          <a href="#">{{ item.list[0] }}</a>
          <span>/</span>
          <a href="#">{{ item.list[1] }}</a>
          <span>/</span>
          <a href="#">{{ item.list[2] }}</a>
        </p>
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      banner_list: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$Axios(this.$Apis.getTypeOne).then((res) => {
        // console.log(res);
        let count = 0;
        let lie = 0;
        res.data.forEach((item, index) => {
          if (index % 3 == 0) {
            this.banner_list.push({
              list: [],
            });
            lie++;
          }
          if (count < 3) {
            count = ++count == 3 ? 0 : count;
            this.banner_list[lie - 1].list.push(item);
          }
        });
      });
      //   console.log(this.banner_list);
    },
  },
};
</script>

<style scoped>
.banner_list {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  height: 360px;
  padding: 10px 0;
  background-image: url(@/assets/images/category-back.png);
}
.banner_main {
  list-style: none;
  width: 215px;
}
.banner_main > p {
  height: 34px;
  line-height: 34px;
  padding-left: 30px;
}
.banner_main > p:hover {
  background-color: #77717f;
}
.banner_main > p > a {
  display: inline-block;
  font-size: 14px;
  color: #fff;
}
.banner_main > p > a:hover {
  color: #f7b200;
}
.banner_main > p > span {
  margin: 0 5px;
  font-size: 16px;
  color: #fff;
}
</style>