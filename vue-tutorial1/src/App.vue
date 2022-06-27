<template>
  <div class="menu">
    <a v-for="(a, i) in menus" :key="i">{{ a }}</a>
  </div>

  <!-- <div v-for="(a, i) in products" :key="i">
    <h4>{{products[i]}}</h4>
    <p>{{i}}만원</p>
  </div> -->

  <div>
    <h4>{{ products[0] }}</h4>
    <p>{{ price1 }}만원</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ price2 }}만원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>{{ price1 }}만원</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      menus: ["Home", "Shop", "About"],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
