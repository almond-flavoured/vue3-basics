<template>
  <div>
    <Post :instaData="instaData[i]" v-for="(a, i) in instaData" :key="i" />
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Container",
  components: {
    Post
  },
  props: {
    instaData: Array
  }
}
</script>

<style>

</style>