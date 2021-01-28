<template>
  <div class="flex w-full flex-wrap">
    <div class="w-full text-center text-3xl my-4">Mark Down App</div>
    <section class="flex m-auto w-11/12 h-screen">
      <article class="w-1/2 border rounded-xl">
        <textarea class="w-full h-full" :value="text" @input="update"></textarea>
      </article>
      <article class="w-1/2 border border-gray-700 rounded-xl" v-html="markedText">
      </article>
    </section>
  </div>  
</template>

<script>
import marked from 'marked'
import debounce from '../utilities/mixins/debounce.js'
export default {
  mixins: [debounce],
  data () {
    return {
      text: 'Indonesia',
    }
  },
  computed: {
    markedText () {
      return marked(this.text)
    },
  },
  methods: {
    update (e) {
      const task = () => {this.text = e.target.value}
      this.debouce(task, 500)
    }
  }

}
</script>

<style>

</style>