<template>
  <div class="page_box">
    <bread>
      <a><b>&gt;</b>{{ $route.params.addressName }}</a>
    </bread>
    <div class="cateBread">
      <div>
        <p>
          <img :src="$route.params.imgsrc" alt="" />
        </p>
        <p>
          <span class="address">{{ $route.params.addressName }}</span>
          <span>证书信息</span>
        </p>
      </div>
      <ul class="info-eval">
	        <li>
	            <b>商品质量：</b>
	            <p><span style="width:100.0%;"></span></p>
	            <i>5.0分</i>
	        </li>
	        <li>
	            <b>服务态度：</b>
	            <p><span style="width:100.0%;"></span></p>
	            <i>5.0分</i>
	        </li>
	    </ul>
    </div>
    <div class="search_box">
      <goodItem
        :good="good"
        v-for="good in goodList"
        :key="good.Id"
        class="search_item"
      ></goodItem>
    </div>
  </div>
</template>

<script>
import bread from "@/components/main/bread.vue";
import goodItem from "@/components/main/goodItem.vue";
export default {
  props: ["imgs"],
  data() {
    return {
      goodList:[]
    }
  },
  created() {
    this.init(this.$route.params.supp);
  },
  methods: {
    init(supplier) {
      this.$Axios(this.$Apis.supplierList + `?supplier=${supplier}`).then(
        (res) => {
          this.goodList=res.data
        }
      );
    },
  },
  components: {
    bread,
    goodItem,
  },
};
</script>

<style scoped>
.cateBread {
  margin: 20px 0 30px;
  padding-left: 20px;
  background: #fff;
  display: flex;
  height: 130px;
  justify-content: space-between;
}
.cateBread span:last-of-type {
  font-size: 16px;
  color: gray;
  height: 21px;
  position: relative;
  width: 90px;
}
.cateBread > div {
  display: flex;
  align-items: center;
}
.cateBread > div > p:first-child {
  width: 100px;
  height: 120px;
  margin: 20px;
}
.cateBread > div p img {
  width: 100%;
}
.cateBread .address {
  display: block;
  color: #000;
  font-size: 24px;
  margin-bottom: 8px;
}
.info-eval {
    float: right;
    margin: 40px 0;
    padding-right: 20px;
}
.info-eval li {
    position: relative;
    height: 25px;
    width: 236px;
    display: flex;
    align-items: center;
}
.info-eval b {
    display: inline-block;
    font-weight: 400;
    color: #666;
}
.info-eval p {
    position: relative;
    display: inline-block;
    margin-left: 3px;
    width: 103px;
    height: 15px;
    background: url(http://static3.biyao.com/pc/common/img/master/sprit_biyao.png?v=biyao_653b0c0) -339px -250px;
}
.info-eval span {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    display: inline-block;
    height: 15px;
    background: url(http://static4.biyao.com/pc/common/img/master/sprit_biyao.png?v=biyao_653b0c0)-339px -268px;
}
.info-eval i {
    position: absolute;
    right: 5px;
    display: inline-block;
    color: #f49f26;
    text-decoration: none;
}
.search_box {
  display: flex;
  flex-wrap: wrap;
}
.search_item {
  margin-right: 20px;
  margin-bottom: 20px;
}
.search_item:nth-of-type(4n){
  margin-right: 0px;
}
</style>