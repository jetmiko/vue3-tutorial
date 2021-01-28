const debounce  = {
  data () {
    return {
      timeout: ''
    }
  },
  methods: {
    debouce (func, wait = 1000) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(func, wait)
    }
  }
}

export default debounce