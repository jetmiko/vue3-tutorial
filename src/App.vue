<template>
  <AppHeader />
  <!-- <DcHero /> -->
  <!-- <Calendar /> -->
  <router-view></router-view>  
</template>

<script>

import AppHeader from './components/AppHeader.vue'
// // import DcHero from './components/DcHero.vue'
// import Calendar from './components/Calendar.vue'

  export default {
    components: {
      AppHeader
    },
    mounted () {
      // this.isShowing = true
    },
  }
</script>