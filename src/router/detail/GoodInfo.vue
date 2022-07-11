<template>
  <div id="vs_content" class="view-detail">
    <div class="txq_container">
      <div class="txq_header">
        <div
          class="txq_item"
          v-for="(item, index) in good.description"
          :key="index"
        >
          <dl>
            <dt>{{ item.title }}</dt>
            <dd>{{ item.text }}</dd>
          </dl>
        </div>
      </div>
      <div class="txq_details">
        <p v-for="(item, index) in good.descriptionImage" :key="index">
          <img :src="item" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["good"],
};
</script>

<style scoped>
div#vs_content {
  font-size: 16px;
}
#vs_content .txq_header {
  width: 800px;
  margin: 0 auto 20px;
}
#vs_content .txq_header dl {
  line-height: 32px;
  border-bottom: 2px dotted #cecece;
  font-size: 16px;
  color: #333;
}
#vs_content .txq_header dt {
  display: inline-block;
  width: 160px;
  font-size: 16px;
  color: #666;
  vertical-align: top;
}
#vs_content .txq_header dd {
  display: inline-block;
  width: 630px;
  font-size: 16px;
  color: #333;
}
#vs_content img {
  width: 800px;
}
</style>