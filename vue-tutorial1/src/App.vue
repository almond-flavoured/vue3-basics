<template>

  <Modal :data="data" :clickedData="clickedData" :modal="modal" />

  <div class="menu">
    <a v-for="(a, i) in menus" :key="i">{{ a }}</a>
  </div>

  <Discount/>
  

  <!-- <div v-for="(a, i) in products" :key="i">
    <h4>{{products[i]}}</h4>
    <p>{{i}}만원</p>
  </div> -->

  <div v-for="(a, i) in data" :key="i">
    <img :src="data[i].image" alt="room[i]" class="room-img">
    <h4 @click="modal = true, clickedData= i">{{ data[i].title }}</h4>
    <p>{{ data[i].price }}만원</p>
  </div>

  <!-- <div>
    <img src="./assets/room1.jpg" alt="room1" class="room-img">
    <h4>{{ products[1] }}</h4>
    <p>{{ price2 }}만원</p>
    <button @click="increase(1)">허위매물신고</button> <span>신고수 : {{ report[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" alt="room2" class="room-img">
    <h4>{{ products[2] }}</h4>
    <p>{{ price1 }}만원</p>
    <button @click="increase(2)">허위매물신고</button> <span>신고수 : {{ report[2] }}</span>
  </div> -->
</template>

<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';


export default {
  name: 'App',
  data() {
    return {
      clickedData: 0,
      data: data,
      modal: false,
      report: [0, 0, 0],
      menus: ["Home", "Shop", "About"],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  methods: {
    increase(e) {
      if (e === 0) {
        this.report[0]++
      }
      if (e === 1) {
        this.report[1]++
      }
      if (e === 2) {
        this.report[2]++
      }
    }
  },
  components: {
    Discount,
    Modal
  }
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}


.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;

}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.room-img {
  width: 100%;
  margin-top: 40px;
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
