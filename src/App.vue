<template>
  <div>
    <h2>Hello Vue</h2>
    <loginform :onLogin='onLogin'/>
    <success-mesage :email='email'/>
    <!-- <loginform @login='onLogin'/> -->
  </div>
</template>


<script>
import loginform from "./LoginForm"
import successMesage from "./SuccessMesage"
export default {
  data() {
    return {
      email:''
    }
  },
  components:{
    loginform,
    successMesage
  },
  methods:{
    onLogin(data) {
      this.email = data.email
      // console.log('child component', data)
    }
  }
}
</script>






















<!--<template>
  <div>
    <h1>Hello Vue!</h1>
      <my-user
        v-for="user in users" :key="user.index"
        :name='user.name'
        :description='user.description'
        :is-active='user.isActive'
       />
      <my-user />
  </div>
</template>


<script>
import user from './components/Users'
export default {
    data(){
      return {
        users:[
          {name:'Alex',description:'This is admin', isActive:true},
          {name:'Ivan',description:'This is manager', isActive:false},
          {name:'Maksim',description:'This is client', isActive:false}
         ]
      }
  },
  components:{
    myUser:user
  }
}
</script>
