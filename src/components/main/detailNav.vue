<template>
  <div class="view-title clearfix">
    <a>
      <span></span>
      <i>{{ good.addressName }}</i>
    </a>
    <ul class="clearfix">
      <li class="" id="detail">
        <router-link active-class="view-active" :to="'/detail/goodinfo?goodId='+good.Id">商品信息</router-link>
      </li>
      <li id="evaluate">
        <router-link active-class="view-active" :to="'/detail/comminfo?goodId='+good.Id">评价详情 {{ good.commentTol }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["good"],
};
</script>

<style scoped>
.view-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 60px;
  width: 1078px;
  background: #eeecef;
  border: 1px solid #ccc;
}
.view-title a {
  float: left;
  width: 240px;
  border-right: 1px solid #ccc;
  text-align: center;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  position: relative;
}
.view-title span {
  display: inline-block;
  width: 20px;
  height: 60px;
  margin: 0 12px;
  background: url(http://static2.biyao.com/pc/common/img/master/supplier-icon.png?v=biyao_c57f462)
    center no-repeat;
  vertical-align: middle;
}
.view-title a i {
  display: inline-block;
  max-width: 170px;
  vertical-align: middle;
}
.view-title ul {
  float: left;
  border-left: 0;
  line-height: 60px;
  text-align: center;
}
.view-active {
  background: #fff;
  color: #523669;
}
.view-active::after{
    position: absolute;
    content: '';
    left: 0px;
    bottom: 0px;
    width: 100%;
    border-bottom: 3px solid #523669;
}
.view-title li {
  position: relative;
  float: left;
  border-right: 1px solid #ccc;
  color: #333;
  font-size: 16px;
  cursor: pointer;
}
.view-title li.view-active i {
  display: block;
}
.view-title li i {
  position: absolute;
  display: none;
  height: 3px;
  background: #523669;
  left: 0;
  bottom: -1px;
  width: 100%;
}
</style>