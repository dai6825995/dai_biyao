<template>
  <div class="view-evaluate" style="display: block">
    <div class="eval-select clearfix">
      <ul>
        <li id="evalAll" class="eval-active"><span></span>全部</li>
      </ul>
    </div>
    <ul class="eval-list">
      <li v-for="(comm, index) in good.comment" :key="index">
        <dl class="eval-user">
          <dt>
            <img :src="comm.userPic" />
          </dt>
          <dd>{{ comm.userName }}</dd>
        </dl>
        <div class="eval-content">
          <p class="eval-artical">
            {{ comm.text }}
          </p>
          <p class="eval-time">
            <span>{{ comm.time.substring(0, comm.time.length - 2) }}</span
            ><span>规格:{{ comm.product }}</span>
          </p>
        </div>
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
.eval-select li {
  display: inline-block;
  margin-right: 40px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
}
.eval-list > li {
  margin-top: 20px;
  border-top: 1px solid #eee;
  position: relative;
  min-height: 100px;
}
.eval-select li.eval-active span {
  background: url(http://static.biyao.com/pc/common/img/master/eval-select.png?v=biyao_5be7e87)
    no-repeat;
}
.eval-select span {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 10px;
  background: url(http://static4.biyao.com/pc/common/img/master/eval-noSelect.png?v=biyao_d58cbe6)
    no-repeat;
}
.eval-list > li {
  margin-top: 20px;
  border-top: 1px solid #eee;
  position: relative;
  min-height: 100px;
}
.eval-user {
  float: left;
  margin: 20px 0 0 20px;
}
.eval-user img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.eval-user dd {
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  color: #333;
}
.eval-content {
  margin: 20px 0 0 100px;
}
.eval-content p {
  font-size: 14px;
  color: #4a4a4a;
  line-height: 21px;
}
.eval-artical {
  margin-bottom: 10px;
}
.eval-time span {
  margin-right: 24px;
  color: #bbb;
  font-size: 12px;
  line-height: 16px;
}
</style>