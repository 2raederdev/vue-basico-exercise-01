new Vue({
    el: '#app',
    
    data () {
      return {
        courses: [],
        title: '',
        time: ''
      }
    },
    
    computed: {
       totalTime(){
              return !this.courses.length ? 0 : this.courses.reduce((a, b) => a + parseInt(b.time), 0)
          },
    },
    
    watch:{
          courses(newVal){
              console.log(newVal)
          }
    },
    
    methods: {
      addCourse(){
        if(this.title && this.time ){
          let course = {
          title: this.title,
          time: this.time
        }
        this.courses.push(course)
        
        this.title = ''
        this.time = ''
        }
      }
    }
  })