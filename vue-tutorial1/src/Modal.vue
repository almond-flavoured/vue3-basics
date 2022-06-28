<template>
    <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <Discount/>
      <h4>{{ data[clickedData].title }}</h4>
      <img :src="data[clickedData].image" style="width:100%">
      <p>{{data[clickedData].content}}</p>
      <p>{{data[clickedData].price}}</p>
      <button @click="modal = false">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    data: Array,
    clickedData: Number,
  },
  data() {
    
  }
}
</script>

<style>

</style>