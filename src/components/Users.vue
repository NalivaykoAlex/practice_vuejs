<template>
<div>
  <div>
    <h3>{{upperCaseName()}}</h3>
      <p>{{description}}</p>
  </div>
  <div>
    {{isActive}}
  </div>
</div>
</template>


<script>
export default {
  props:{
    name:{
      type:String,
      default:'Not set'
      // required:true
    },
    description:String,
    isActive:Boolean
  },
  // props:['name', 'description', 'isActive'],
  methods:{
    upperCaseName() {
      return this.name.toUpperCase()
    }
  }
}

</script>
