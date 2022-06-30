<template>
	$route.
  <div>
		<h5>{{ blogData.title }}</h5>
		<p>{{ blogData.content }}</p>
	</div>
</template>

<script>
export default {
	name: 'DetailVue',
	props: {
    blogData: Object
  }

}
</script>

<style>

</style>