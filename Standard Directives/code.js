new Vue({
  el:'#root',
  data:{
    message:'',
    isShown:false,
    users:[
      {name:'Alex'},
      {name:'Ivan'},
      {name:'Maksim'},
    ]
  },
  methods:{
    onSubmit() {
      this.isShown = !this.isShown
      console.log('onSubmit')
    }
  }
})