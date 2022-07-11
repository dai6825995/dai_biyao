<template>
  <div class="fixNav" ref="fix">
    <div class="page_box">
      <div class="showAllTyoe">
        <p>
          <span>全部分类</span>
          <i></i>
          <classiftList class="fix_show"></classiftList>
        </p>
      </div>
      <serach></serach>
    </div>
  </div>
</template>

<script>
import serach from "./serach.vue";
import classiftList from "../nav/classiftList.vue";
export default {
  methods: {
    wscroll() {
      let st = document.documentElement.scrollTop || document.body.scrollTop;
      if (st > 60) {
        this.$refs.fix.style.overflow = "unset";
        this.$refs.fix.style.height = "60px";
      } else {
        this.$refs.fix.style.overflow = "hidden";
        this.$refs.fix.style.height = "0px";
      }
    },
  },
  components: {
    serach,
    classiftList,
  },
  created() {
    window.addEventListener("scroll", this.wscroll);
  },
  mounted() {
    this.$refs.fix.style.height = "0px";
  },
  unmounted() {
    window.removeEventListener("scroll", this.wscroll);
  },
};
</script>

<style scoped>
.fixNav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 88;
  width: 100vw;
  height: 60px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
  overflow: hidden;
  transition: height 0.1s;
}
.page_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.showAllTyoe {
  position: relative;
}
.fix_show {
  top: 60px;
  left: -8px;
  display: none;
}
.showAllTyoe > p {
  height: 60px;
  line-height: 60px;
}
.showAllTyoe > p:hover .fix_show {
  display: block;
}
.showAllTyoe > p:hover i {
  transform: rotate(180deg);
}
.showAllTyoe span {
  color: gray;
  font-size: 16px;
}
.showAllTyoe > p i {
  display: inline-block;
  width: 15px;
  height: 8px;
  margin-left: 10px;
  background: url(http://static.biyao.com/pc/common/img/master/categoryDown.png?v=biyao_58c52bc)
    no-repeat;
}
</style>