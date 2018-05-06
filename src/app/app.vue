<template>
  <div id="app" class="container">

    <h1 class="text-primary text-center mt-5 mb-5">Product List</h1>

    <new-item v-on:create="create"></new-item>
    <table class="table table-striped  table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in items">
          <item 
            :localitem="item"
             v-on:updated="updated"
             v-on:deleted="deleted"
            ></item>
        </template>
      </tbody>
    </table>
    <transition name="fade">
      <div v-if="alert.show" :class="`alert alert-${alert.type}`" role="alert">
        {{alert.text}}
      </div>
    </transition>
    <!-- <pre>{{$data}}</pre> -->
  </div>
</template>

<script>
import NewItem from './components/newItem.vue'
import Item from './components/Item.vue'
export default {
  name: 'app',
  components:{ NewItem , Item },
  mounted(){
    this.getItems()
  },
  data () {
    return {
      alert:{
        show:false,
        type: 'success',
        text:'Creado con éxito'
      },
      items:[]
    }
  },
  methods:{
    getItems(){
      //console.log('getItems')
      this.axios.get('./item')
        .then(items=>{
          console.log(items)
          this.items = items.data
        })
        .catch(err=>{
          console.error(err)
        })
    },
    create(){
      this.getItems()
      this.alert.show = true
      this.alert.type = 'success'
      this.alert.text = 'Producto creado con éxito'
      setTimeout(()=>{this.alert.show = false},2000)
    },
    updated(){
      this.getItems()
      this.alert.show = true
      this.alert.type = 'success'
      this.alert.text = 'Producto actualizado con éxito'
      setTimeout(()=>{this.alert.show = false},2000)
    },
    deleted(){
      this.getItems()
      this.alert.show = true
      this.alert.type = 'danger'
      this.alert.text = 'Producto eliminado con éxito'
      setTimeout(()=>{this.alert.show = false},2000)
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
