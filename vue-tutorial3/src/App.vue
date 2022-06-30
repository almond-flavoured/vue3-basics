<template>
<div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :instaData="instaData" />
  <button :value="count" @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <div>내용0</div>
  <div>내용1</div>
  <div>내용2</div>
  <button>버튼0</button>
  <button>버튼1</button>
  <button>버튼2</button>
  <div style="margin-top: 500px"></div>
 
</template>

<script>
import Container from './components/Container.vue';
import instaData from './assets/data.js';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      instaData,
      count: 0,
    }
  },
  components: {
    Container
  },
  methods: {
    async more(e) {
      console.log(e.target.value)
      try {
        const more = await axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`);
        console.log(more)
        this.instaData = [...this.instaData, more.data]
      } catch(error) {
          console.log(error.response.status)
          return alert('게시물이 존재하지 않음')
      }
      this.count = this.count + 1;
      
      // if (this.count === 0) {
      //   const more = await axios.get('https://codingapple1.github.io/vue/more0.json');
      //   console.log(more.data)
      //   this.instaData = [...this.instaData, more.data]
      // } else if (this.count === 1) {
      //   const more = await axios.get('https://codingapple1.github.io/vue/more1.json');
      //   console.log(more.data);
      //   this.instaData = [...this.instaData, more.data]
      // } else {
      //   alert('게시물이 존재하지 않음')
      // }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
