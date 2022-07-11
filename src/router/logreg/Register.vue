<template>
  <div>
    <div class="login">
      <input type="text" placeholder="用户名" v-model="username" />
      <input type="password" placeholder="密码" v-model="userpwd" />
      <input type="password" placeholder="确认密码" v-model="userpwd2" />
      <span>{{ msg }}</span>
    </div>
    <button @click="register">注册</button>
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
export default {
  data() {
    return {
      username: "",
      userpwd: "",
      userpwd2: "",
      msg: "",
      isReg: false,
    };
  },
  methods: {
    register() {
      if(this.isReg&&this.username){
        this.$Axios(this.$Apis.register+`?userName=${this.username}&password=${this.userpwd}`).then(res=>{
          console.log();
          if(res.data.code==1){
            alert('注册成功')
          }else{
            alert('用户名被占用')
          }
        })
      }else{
        alert('完善注册信息')
      }
    },
  },
  watch: {
    userpwd2(newVal) {
      if (this.userpwd2) {
        if (newVal == this.userpwd) {
          this.msg = "✔";
          this.isReg = true;
        } else {
          this.isReg = false;
          this.msg = "两次密码不一致";
        }
      } else {
        this.isReg = false;
        this.msg = "";
      }
    },
    userpwd(newVal) {
      if (this.userpwd) {
        if (newVal == this.userpwd2) {
          this.msg = "✔";
          this.isReg = true;
        } else {
          this.isReg = false;
          this.msg = "两次密码不一致";
        }
      } else {
        this.isReg = false;
        this.msg = "请输入密码";
      }
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
  border-radius: 0px;
}
.login input:nth-of-type(3) {
  border-top: none;
  border-radius: 0px 0px 5px 5px;
}
.login span {
  display: inline-block;
  width: 100%;
  text-align: right;
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