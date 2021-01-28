<template>
  <div class="flex w-full flex-wrap">

    <div v-for="(colors, index) in sliders" :key="index">
      <div v-if="currentSlide===index" :class="colors" class="absolute w-full" style="height: 350px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentSlide: 1,
      interval: '',
      sliders: ['bg-blue-400', 'bg-yellow-400', 'bg-red-400']
    }
  },
  mounted () {
    this.interval = setInterval(() => { 
      this.currentSlide = (this.currentSlide + 1 ) % 3
    }, 2000)
  },
  beforeUnmount () {
    clearInterval(this.interval)
  }

}
</script>

<style>

</style>