<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discount }}% 할인</h4>
    <!-- <button @click="discountMethod">asd</button> -->
  </div>
</template>

<script>
export default {
  name: 'Discount',
  props: {
    discount: Number,
  },
  data() {
    return {
      
    }
  },
  methods: {
    discountMethod() {
      this.$emit('discount', this.discount)
    }
  }
}
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>