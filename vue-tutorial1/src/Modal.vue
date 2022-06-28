<template>
    <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <Discount/>
      <h4>{{ data[clickedData].title }}</h4>
      <img :src="data[clickedData].image" style="width:100%">
      <p>{{data[clickedData].content}}</p>
      <!-- <input @input="month = $event.target.value; showMonth(month)" > -->
      <input v-model.number="month" >
      <p> {{ month }}개월 선택함 : {{data[clickedData].price * month}}원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    data: Array,
    clickedData: Number,
    modal: Boolean
  },
  data() {
    return {
      month: 1,
    }
      
  },
  methods: {
    showMonth(month) {
      console.log(month)
    },
  },
}
</script>

<style>

</style>