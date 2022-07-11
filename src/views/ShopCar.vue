<template>
  <div class="page_box">
    <bread>
      <a><b>&gt;</b>购物车</a>
    </bread>
  </div>
</template>

<script>
import bread from "@/components/main/bread.vue";
export default {
  data() {
    return {
      shopList:[],
    }
  },
  created(){
    this.init()
  },
  methods:{
    init(){
      let token=sessionStorage.getItem('token')
      let userId=sessionStorage.getItem('userId')
      this.$Axios(this.$Apis.shopList+`?token=${token}&userId=${userId}`).then(res=>{
        console.log(res.data);
      })
    }
  },
  components: {
    bread,
  },
};
</script>

<style>
</style>