<template>
  <div class="page_box">
    <div class="login_bag"></div>
    <div class="login_box">
      <div class="login_a">
        <router-link active-class="active" to="/logreg/login">登录</router-link>
        <span>·</span>
        <router-link active-class="active" to="/logreg/register"
          >注册</router-link
        >
      </div>
      <div class="logreg_box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.page_box {
  margin: 20px auto;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  height: 600px;
  align-items: center;
}
.login_bag {
  width: 400px;
  height: 500px;
  background: url("../assets/images/登录背景图.jpg") no-repeat center center;
  background-size: 100%;
}
.login_box {
  width: 400px;
  height: 500px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
}
.login_a {
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
.login_a a {
  padding: 5px;
  border-bottom: 2px solid transparent;
}
.login_a span {
  display: inline-block;
  font-size: 30px;
  margin: 0px 10px;
}
.login_a .active {
  color: #784cfa;
  border-bottom: 2px solid #784cfa;
}
.logreg_box{
  width: 320px;
  margin: 50px auto;
}
</style>