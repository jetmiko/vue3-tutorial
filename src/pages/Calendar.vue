<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
      <section class="flex justify-between">
        <h2 class="text-2xl my-2 font-bold">{{currentMonthName}}</h2>
        <h2 class="text-2xl my-2 font-bold" >{{currentYear}}</h2>
      </section>
      <section class="flex my-2">
        <p v-for="day in days" :key=day class="h-10 text-center" style="width: 14.28%">
          {{day}}
        </p>
      </section>
      <section class="flex flex-wrap my-2">
        <p class="h-10 text-center" v-for="num in startDay()" :key=num style="width: 14.28%"></p>
        <p :class="currentDateClass(num)" class="h-10 text-center" v-for="num in daysInMonth(2021, currentMonth)" :key=num style="width: 14.28%">{{num}}</p>
      </section>
      <section class="flex justify-between">
        <button class="px-2 border rounded" @click="previous">Prev</button>
        <button class="px-2 border rounded" @click="next">Next</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    }
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month: 'long'})
    }
  },
  methods: {
    daysInMonth (year, month) {
      // const month = new Date().getMonth() + 1
      return new Date(year, month + 1, 0).getDate()
    },
    startDay () {
      return new Date(this.currentYear, this.currentMonth).getDay()
    },
    previous () {
      if (this.currentMonth===0) {
        this.currentMonth = 11
        this.currentYear--
      } else {
        this.currentMonth--
      }
    },
    next () {
      if (this.currentMonth===11) {
        this.currentMonth = 0
        this.currentYear++
      } else {
        this.currentMonth++
      }
    },
    currentDateClass (num) {
      const calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString()
      const currentFullDate = new Date().toDateString()
      return (calendarFullDate===currentFullDate) ? 'text-yellow-600 bg-green-300' : ''
    }
  }

}
</script>

<style>

</style>