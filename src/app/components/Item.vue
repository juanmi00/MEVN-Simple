<template>
  <tr>
    <th scope="row" v-text="item._id"></th>
    <td>
      <form v-show="editar"  @submit.prevent="update" class="form-group"><input class="form-control" type="text" v-model="item.name" required></form>
      <span v-show="!editar" @click="editar = true" class="cursor-pointer">{{item.name}}</span>
    </td>
    <td>
      <form v-show="editar"  @submit.prevent="update" class="form-group"><input class="form-control" type="number" v-model="item.price" required></form>
      <span v-show="!editar" @click="editar = true" class="cursor-pointer">{{item.price}} $</span>
    </td>
    <td>
      <div v-show="editar">
        <button  @click="update" class="btn btn-primary mb-2">UPDATE</button>
        <button  @click="editar = false" class="btn btn-danger mb-2">CANCEL</button>
      </div>
      <button v-show="!editar" @click="deleteItem" class="btn btn-danger mb-2">DELETE PRODUCT</button>
    </td>
  </tr>
</template>
<script>
export default{
  name: 'item',
  props:['localitem'],
  mounted(){
    this.item = this.localitem
  },
	data(){
		return{
      editar:false,
      item:{
        _id:'',
        name:'',
        price: null
      }
		}
	},
  methods:{
    update(){
      this.editar = false
      this.axios
        .put(`./item/${this.item._id}`, this.item)
        .then(res=>{
          this.$emit('updated')
        })
        .catch(err=>{ console.error(err) })
    },
    deleteItem(){
      this.axios
        .delete(`./item/${this.item._id}`)
        .then(res=>{
          this.$emit('deleted')
          this.$emit('load')

        })
        .catch(err=>{ console.error(err) })
    }
  }
}
</script>