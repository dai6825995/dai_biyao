<template>
  <div class="page_box">
    <fixedHeader></fixedHeader>
    <bread>
      <a><b>&gt;</b>每日上新</a>
    </bread>
    <div class="category_title" ref="cat_cif">每日新品</div>
    <div class="time">{{ time }}</div>
    <div>
      <newItem :good="n" v-for="n in newlist" :key="n.Id"></newItem>
    </div>
  </div>
</template>

<script>
import bread from "@/components/main/bread.vue";
import newItem from "@/components/main/newItem.vue";
import fixedHeader from "@/components/header/fixedHeader.vue";
export default {
  data() {
    return {
      newlist: [],
    };
  },
  created() {
    this.$Axios(this.$Apis.newList).then((res) => {
      res.data.forEach((item) => {
        item.labels = JSON.parse(item.labels);
      });
      this.newlist = res.data;
      // console.log(this.newlist);
    });
  },
  components: {
    bread,
    newItem,
    fixedHeader,
  },
  computed: {
    time() {
      let date = new Date();
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;
      let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      return year + "-" + month + "-" + day;
    },
  },
};
</script>

<style scoped>
.category_title {
  margin: 40px 0 20px;
  color: #333;
  font-size: 24px;
  text-align: center;
}
.time {
  padding: 0 20px;
  font-weight: 400;
  font-size: 24px;
  color: gray;
  background: #f9f9f9;
  text-align: center;
  margin: 30px auto;
}
</style>