<template>
  <div>
    <div v-if="step === 0">
      <Post :instaData="instaData[i]" v-for="(a, i) in instaData" :key="i" :newFilterImg="newFilterImg" />
    </div>

  <div v-if="step === 1">
    <div :class="`${newFilterImg} upload-image`" :style="`background-image: url(${uploadedImg})`"></div>
    <div class="filters">
      <FilterBox :filter="filter" v-for="filter in filters" :key="filter" :uploadedImg="uploadedImg">
        {{filter}}
      </FilterBox>
    </div>
  </div>

  <div v-if="step === 2">
    <div :class="`${newFilterImg} upload-image`" :style="`background-image: url(${uploadedImg})`"></div>
    <div class="write">
      <textarea class="write-box" @input="test">write!</textarea>
    </div>
  </div>
  </div>

  <div v-if="step === 3">
    <MyPage :one="1" />
  </div>




</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';
import filterData from '../assets/filterData.js';
import MyPage from './MyPage.vue';



export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Container",
  data() {
    return {
      text: '',
      filters: filterData,
    }
  },
  components: {
    Post,
    FilterBox,
    MyPage
  },
  props: {
    instaData: Array,
    step: Number,
    uploadedImg: String,
    newFilterImg: String,
  },
  methods: {
    test(e) {
      this.text = e.target.value;
      this.$emit('write', this.text, this.newFilterImg);
      console.log(this.text);
    }
  },
  mounted() {
    
  }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>