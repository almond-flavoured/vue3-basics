<template>

  <transition name="fade">
    <Modal @closeModal="modal = false" :roomData="roomData" :clickedData="clickedData" :modal="modal" />
  </transition>

  <!-- <div class="start" :class="{end: modal}">
    <Modal @closeModal="modal = false" :data="data" :clickedData="clickedData" :modal="modal" />
  </div> -->


  <div class="menu">
    <a v-for="(a, i) in menus" :key="i">{{ a }}</a>
  </div>

  <Discount v-if="showDiscount === true" :discount="discount" @discount="handleDiscount" />

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>
  

  <!-- <div v-for="(a, i) in products" :key="i">
    <h4>{{products[i]}}</h4>
    <p>{{i}}만원</p>
  </div> -->

  <Card @openModal="modal = true; clickedData = $event" v-for="(a, i) in roomData" :key="i" :roomData="roomData[i]" />

  <!-- <div v-for="(a, i) in data" :key="i">
    <img :src="data[i].image" alt="room[i]" class="room-img">
    <h4 @click="modal = true, clickedData= i">{{ data[i].title }}</h4>
    <p>{{ data[i].price }}원</p>
  </div> -->

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
import Card from './Card.vue';


export default {
  name: 'App',
  data() {
    return {
      showDiscount: true,
      originalData: [...data],
      clickedData: 0,
      roomData: data,
      modal: false,
      report: [0, 0, 0],
      menus: ["Home", "Shop", "About"],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      discount: 30,
    }
  },
  methods: {
    increase(e) {
      if (e === 0) {
        this.report[0]++;
      }
      if (e === 1) {
        this.report[1]++;
      }
      if (e === 2) {
        this.report[2]++;
      }
    },
    sortBack() {
      this.roomData = [...this.originalData];
      console.log('roomdata==================', this.roomData);
    },
    priceSort() {
      this.roomData.sort((a, b) => {
        return a.price - b.price;
      })
      console.log(this.roomData);
    },
    // handleDiscount() {
    //   setTimeout(() => {this.showDiscount = false}, 2000); 
    // },
    handleDiscount() {
      // console.log(d);
      const decrease = setInterval(() => {
        if (this.discount === 0) {
          clearInterval(decrease)
        } else {
          this.discount = this.discount - 1
        }
        console.log(this.discount)
      }, 1000)
    }
  },
  mounted() {
    this.handleDiscount()
  },
  components: {
    Discount,
    Modal,
    Card,
  }
}
</script>

<style>
/* .start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
} */

/* .fade-enter-from {
 opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
} */

.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  transform: translateY(0px);
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  transform: translateY(-1000px);
}

/* .fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
 opacity: 0;
} */

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
