<template>
  <div class="banner">
    <classiftList></classiftList>
    <div class="platfor">
      <div>
        <span></span>
        <span>大牌品质</span>
      </div>
      <div>
        <span></span>
        <span>工厂价格</span>
      </div>
      <div>
        <span></span>
        <span>分期支付</span>
      </div>
      <div>
        <span></span>
        <span>顺丰包邮</span>
      </div>
      <div>
        <span></span>
        <span>无忧退款</span>
      </div>
    </div>
  </div>
</template>

<script>
import classiftList from "../nav/classiftList.vue";
export default {
  components: {
    classiftList,
  },
};
</script>

<style  scoped>
.banner {
  position: relative;
  margin-top: 10px;
  width: 1080px;
  height: 360px;
  background: url("@/assets/images/banner2.png") no-repeat center center;
  background-size: cover;
}

.platfor {
  position: absolute;
  bottom: -40px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  height: 40px;
  background: #fff;
  justify-content: space-between;
}

.platfor > div {
  display: flex;
  align-items: center;
}

.platfor > div > span:first-child {
  display: inline-block;
  width: 24px;
  height: 40px;
}

.platfor > div > span:last-child {
  font-size: 14px;
  line-height: 40px;
  color: #9687a4;
  padding-left: 10px;
}

.platfor > div:nth-of-type(1) > span:first-child {
  background: url(http://static4.biyao.com/pc/www/img/new_master/ptzc_character.png?v=biyao_e95bcd0)
    no-repeat center center;
  background-size: contain;
}

.platfor > div:nth-of-type(2) > span:first-child {
  background: url(http://static.biyao.com/pc/www/img/new_master/ptzc_price.png?v=biyao_6786c61)
    no-repeat center center;
  background-size: contain;
}

.platfor > div:nth-of-type(3) > span:first-child {
  background: url(http://static1.biyao.com/pc/www/img/new_master/ptzc_payment.png?v=biyao_75208ed)
    no-repeat center center;
  background-size: contain;
}

.platfor > div:nth-of-type(4) > span:first-child {
  background: url(http://static2.biyao.com/pc/www/img/new_master/ptzc_sf.png?v=biyao_4abee91)
    no-repeat center center;
  background-size: contain;
}

.platfor > div:nth-of-type(5) > span:first-child {
  background: url(http://static3.biyao.com/pc/www/img/new_master/ptzc_refund.png?v=biyao_54de047)
    no-repeat center center;
  background-size: contain;
}
</style>