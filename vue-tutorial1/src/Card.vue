<template>
  <div>
    <img :src="data.image" alt="room" class="room-img">
    <h4 @click="changeModal">{{ data.title }}</h4>
    <p>{{ data.price }}원</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: Object,
  },
  methods: {
    changeModal() {
      this.$emit('openModal', this.data.id)
    }
  }
}
</script>

<style>

</style>