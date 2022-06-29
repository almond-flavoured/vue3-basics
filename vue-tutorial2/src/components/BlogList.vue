<template>
  <div>
    <h4>{{blogData.title}}</h4>
    <p>{{blogData.date}}</p>
  </div>
</template>

<script>
export default {
	name: 'BlogList',
  data() {
    return {
    }
  },
  props: {
    blogData: Object
  }
}
</script>

<style>

</style>