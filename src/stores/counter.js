import { defineStore } from 'pinia'

// When import we are gonna import 'useCounterStore'
export const useCounterStore = defineStore({
  id: 'counter', // id is required, to track store internally
  // State hold the actual variables
  state: () => ({
    // All of these are called properties of variable
    count: 0,
    name: 'sab',
    userName: 'DummyUserName'
  }),
  // actions are method, often change the state of the object
  actions: {
    increaseCount() {
      this.count = this.count + 2.6
    },
    decreaseCount() {
      this.count = this.count - 2.6
    }
  },
  // getters are reactive functions
  getters: {
    oddorEven: (state) => {
      console.log('odd or even function fired', state.name)
      if (state.count % 2 === 0) return 'Even'
      return 'Odd'
    }
  }
})
