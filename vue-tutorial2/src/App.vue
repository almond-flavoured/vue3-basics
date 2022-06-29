<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/list">
            <a class="nav-link" href="#">List</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/detail">
            <a class="nav-link" href="#">Detail</a>
          </router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<!-- <div>
  <h5>Vue개발자의 블로그</h5>
  <p>-Vue로 개발-</p>
</div> -->




<router-view :blogData="blogData[i]" v-for="(a, i) in blogData" :key="a"></router-view>

<!-- <div>
  {{blogData}}
</div> -->

  <!-- <BlogList :blogData="blogData[i]" v-for="(a, i) in blogData" :key="a" /> -->

</template>

<script>
// import BlogList from './components/BlogList.vue';
import blogData from './assets/data.js'

export default {
  name: 'App',
  data() {
    return {
      blogData: blogData,
    }
  },
  components: {
    // BlogList
  },
  methods: {
    // handleRoute() {
    //   if ()
    // }
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
</style>
