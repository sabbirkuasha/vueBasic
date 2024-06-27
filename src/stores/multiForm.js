import { defineStore } from 'pinia'

export const mForm = defineStore('multiForm', {
  state: () => ({
    currentStep: 1, // Starting from step 1
    totalStep: 5
  }),
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
  }
})
