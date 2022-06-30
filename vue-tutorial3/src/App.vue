<template>
<div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish" >발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :instaData="instaData" :step="step" :uploadedImg="uploadedImg" @write="content = $event" :newFilterImg="newFilterImg" />
  <button :value="count" @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="button === 0">내용0</div>
  <div v-else-if="button === 1">내용1</div>
  <div v-else>내용2</div>
  <button @click="button = 0">버튼0</button>
  <button @click="button = 1">버튼1</button>
  <button @click="button = 2">버튼2</button>
  <div style="margin-top: 500px"></div> -->
 
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
      step: 0,
      uploadedImg: '',
      content: '',
      newFilterImg: '',
      // button: 0
    }
  },
  mounted() {
    this.emitter.on('onDisplay', (e) => {
      console.log(e);
      this.newFilterImg = e;
    })
  },
  components: {
    Container
  },
  methods: {
    test() {
      // console.log(q)
      // this.content = q;
    },
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
    },
    upload(e) {
      const file = e.target.files;
      console.log(file[0].type);
      const imgUrl = URL.createObjectURL(file[0]);
      // const split = imgUrl.slice(5);
      // console.log(typeof split);
      this.uploadedImg = imgUrl;
      console.log(this.uploadedImg)
      this.step = 1;
    },
    publish() {
      const mywriting = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadedImg,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.newFilterImg
      }
      this.instaData = [mywriting, ...instaData];
      this.step = 0;
    },
    sendEvent() {
      this.$emit('update')
    }
    // check(e) {
    //   console.log(e.target.value)
    //   this.button = Number(e.target.value)
    //   console.log(typeof this.button)
    //   // e.target.firstChild
    // }
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
