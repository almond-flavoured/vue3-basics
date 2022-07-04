import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      likes: 30,
      check: 0,
    }
  },
  mutations: {
    handleName(state) {
      state.name = 'park'
    },
    handleAge(state, a) {
      state.age = state.age + a;
    },
    handleLikes(state) {
      if (this.check === 0) {
        console.log(this.check)
        state.likes = state.likes + 1;
      } else {
        state.likes = state.likes - 1;
      }
    
    }
  }

})

export default store;