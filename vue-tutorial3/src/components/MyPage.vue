<template>
  <div>
    <div style="padding : 10px">
      <h4>팔로워</h4>
      <input @input="handleInput" placeholder="🔍" />
      <div class="post-header" v-for="a in follower" :key="a">
        <div class="profile" :style="`background-image:url(${a.image})`" ></div>
        <span class="profile-name">{{a.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
// import {useStore} from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {}
  },
  props: {
    one: Number,
  },
  name: 'MyPage',
  setup() {
    let follower = ref([]);   // 그 나머지 자료형 집어넣음 eg) 숫자, 문자
    // let {one} = toRefs(props);
    // console.log(one.value);

    // let result = computed(() => {
    //   return follower.value.length
    // })
    // console.log('result=============', result.value);
    
    // let test = reactive({name: 'kim'})    // 보통 array, object 집어넣음
    // console.log('follower', follower)
    // test;
    // let store = useStore();
    // console.log('name:', store.state.name);

    function handleInput(e) {
      console.log(e.target.value);
      // const value = e.target.value
      follower.value = follower.value.filter(el => el.name.includes(e.target.value))
      console.log('follower.value=================', follower.value)
      // console.log('follower================', follower.value.filter(el => el.name.includes(e.target.value)))
      
    }

    onMounted(() => {
      axios.get('/follower.json').then((e) => {
      // follower.value = JSON.parse(e.data)
      follower.value = e.data;
      console.log('follower', follower.value);
      })  
    })
    
    return {follower, handleInput};
  }
}
</script>

<style>

</style>