<template>
	<div class="text-left row justify-content-md-center">
    <div class="mx-sm-3 mb-4">
      <h3 class="text-primary">New Product: </h3> 
    </div>
    <div class="">
      <form class="form-inline" @submit.prevent="createItem">
        <div class="form-group mx-sm-3 mb-2">
          <input type="text" v-model="item.name" required class="form-control"  placeholder="Name">
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <input type="number" v-model="item.price" required class="form-control"  placeholder="Price">
        </div>
        <button type="submit" class="btn btn-primary mb-2">CREATE PRODUCT</button>
      </form>
    </div>
  </div>
</template>
<script>
export default{
  name: 'new-item',
  mounted(){
    
  },
	data(){
		return{
      item:{
        name:'',
        price: null
      }
		}
	},
  methods:{
    createItem(){
      this.axios
        .post('./item',this.item)
        .then(res=>{
          this.item.name = ''
          this.item.price = null
          this.$emit('create')
        })
        .catch(err=>{ console.error(err) })
    }
  }
}
</script>