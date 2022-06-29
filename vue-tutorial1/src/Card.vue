<template>
  <div>
    <img :src="roomData.image" alt="room" class="room-img">
    <h4 @click="changeModal">{{ roomData.title }}</h4>
    <p>{{ roomData.price }}원</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    roomData: Object,
  },
  methods: {
    changeModal() {
      this.$emit('openModal', this.roomData.id);
    },
    showData() {
      console.log(this.roomData);
    }
  }
}
</script>

<style>

</style>