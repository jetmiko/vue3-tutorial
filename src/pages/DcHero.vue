<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="bg-red-900 text-yellow-400 text-2xl text-center">DC Heroes </h1>
      <ul>
        <li class="flex justify-between" v-for="(value, key) in dcHeroes" :key=value.name>
          <div>{{value.name}} 
          </div>
          <button @click="remove(key)">X</button>
        </li>
        <form class="mt-10" @submit.prevent = "addHero">
        <input class="border rounded-lg" v-model="newHero" placeholder="type hero's name"/>
        <button class="ml-2 border rounded bg-gradient-to-r from-green-500 to-gray-600" type="submit" >Add Hero</button>
        </form>
        <small>Total Heroes in the list is: {{heroesCount}}</small>
        <!-- <button type="button" @click="setFullname">setFullname</button> -->
      </ul>
    </div>
  </div>  
  
</template>

<script>
export default {
  data () {
    return {
      newHero: '',
      fname: 'Shrathak',
      lname: 'India',
      dcHeroes: [
        {name: 'SuperGirl'}, 
        {name: 'Flash'}, 
        {name: 'Batman'}, 
        {name: 'Superman'}, 
      ]
    }
  },
    computed: {
      heroesCount () {
        return this.dcHeroes.length + ' Heroes '
      },
      fullname: {
        get () {
          return `${this.fname} ${this.lname}`
        },
        set (fullname) {
          const values = fullname.split(' ')
          this.fname = values[0]
          this.lname = values[1]
        }
      }
    },
    methods: {
      setFullname () {
        this.fullname = 'BUdi Jetmiko'
      },
      addHero () {
        this.dcHeroes.push({name: this.newHero})
        this.newHero = ''
      },
      remove(index) {
        // console.log(this.dcHeroes.filter((hero, i) => i != index))
        this.dcHeroes = this.dcHeroes.filter((hero, i) => i != index)
      }

    }


}
</script>
