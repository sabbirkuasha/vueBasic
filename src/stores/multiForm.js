import { defineStore } from 'pinia'

export const mForm = defineStore('multiForm', {
  state: () => ({
    currentStep: 1, // Starting from step 1
    totalStep: 5,
    newUser: {
      formPersonalinfo: {
        name: '',
        isComplete: false
      }
    }
  }),
  // Actions are the method
  actions: {
    nextStep() {
      this.currentStep++
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },
    setStep(stepNumber) {
      this.currentStep = stepNumber
    }
  },
  // getters are reactive functions
  getters: {
    requiredField: (state) => {
      // console.log(state)
      if (state.newUser.formPersonalinfo.name.length > 1) {
        return (state.newUser.formPersonalinfo.isComplete = false)
      } else return true
    }
  }
})
