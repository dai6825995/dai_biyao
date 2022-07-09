<template>
  <div class="page_box0">

  </div>
</template>

<script>
export default {
    created(){
        this.$Axios(this.$Apis.hotList).then(res=>{
            console.log(res);
        })
    }

}
</script>

<style>

</style>