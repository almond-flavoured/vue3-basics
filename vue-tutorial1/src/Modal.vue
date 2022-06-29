<template>
    <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <!-- <Discount/> -->
      <h4>{{ roomData[clickedData].title }}</h4>
      <img :src="roomData[clickedData].image" style="width:100%">
      <p>{{roomData[clickedData].content}}</p>
      <input @input="month = $event.target.value" value="1"/>
      <!-- <input v-model.number="month" > -->
      <!-- <input type="range" min="1" max="12"> -->
      <p> {{ month }}개월 선택함 : {{roomData[clickedData].price * month}}원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    roomData: Array,
    clickedData: Number,
    modal: Boolean
  },
  data() {
    return {
      month: 1,
    }
  },
  watch: {
    month(a) {
      if (a >= 13) {
        alert('13이상 입력하지 말아주세요');
      }
      if (isNaN(a) === true) {
        alert('숫자를 입력하세요');
        this.month = 1;
      }
      console.log(isNaN(a));
    },
    date() {

    }
  },
  beforeUpdate() {
    if (Number(this.month) === 2) {
      alert('no 2')
      this.month = 3;
    }
    console.log(typeof this.month)
  },
  methods: {

  },
}
</script>

<style>

</style>