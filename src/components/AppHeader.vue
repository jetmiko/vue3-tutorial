<template>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VUE 3 Tutorial</title>
</head>
  <nav class="py-2 text-2xl text-white w-full bg-gradient-to-r from-blue-800 to-blue-600">
      <router-link class="mx-3" :to="item.to" v-for="item in list" :key="item">{{item.title}}</router-link>
      <!-- <router-link class="mx-3" to="/DcHero">DC Heroes</router-link>
      <router-link to="/Calendar">Calendar</router-link> -->
  </nav>
  
</template>

<script>
export default {
  data () {
    return {
      list: [
        {title: 'Home', to: '/'},
        {title: 'DC Heroes', to: '/DcHero'},
        {title: 'Calendar', to: '/Calendar'},
        {title: 'Markdown', to: '/Markdown'},
        {title: 'Slider Carousel', to: '/Slider'},
      ]
    }
  }

}
</script>
