import { defineStore } from 'pinia'

export const mForm = defineStore('multiForm', {
  state: () => ({
    currentStep: 1 // Starting from step 1
  })
})
