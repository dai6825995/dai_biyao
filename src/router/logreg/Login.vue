<template>
  <div>
    <div class="login">
      <input type="text" placeholder="用户名" v-model="username" />
      <input type="password" placeholder="密码" v-model="userpwd" />
    </div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  inject:['that'],
  data() {
    return {
      username: "",
      userpwd: "",
    };
  },
  methods: {
    login() {
      this.$Axios(
        this.$Apis.login + `?userName=${this.username}&password=${this.userpwd}`
      ).then((res) => {
        if (res.data.code == 1) {
          for (const key in res.data) {
            sessionStorage.setItem(key, res.data[key]);
          }
          alert("登录成功");
        }
        this.that.setLogName(sessionStorage.getItem("userName"))
        if (sessionStorage.getItem("toPath")) {
          this.$router.replace(sessionStorage.getItem("toPath"));
        } else {
          this.$router.replace(this.$router.options.history.state.back);
        }
      });
    },
  },
};
</script>

<style scoped>
.login input {
  width: 100%;
  height: 40px;
  font-size: 20px;
  padding-left: 40px;
  outline: none;
  border: 1px solid #333;
  border-radius: 5px 5px 0px 0px;
}
.login input:nth-of-type(2) {
  border-top: none;
  border-radius: 0px 0px 5px 5px;
}
button {
  display: block;
  margin-top: 40px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: #784cfa;
  color: #fff;
  border: none;
  font-size: 20px;
}
</style>