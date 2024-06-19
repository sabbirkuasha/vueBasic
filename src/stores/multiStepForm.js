import { defineStore } from 'pinia'

export const useMultiStepStore = defineStore('multiStep', {
  state: () => ({
    currentStep: 1 // Starting from step 1
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
