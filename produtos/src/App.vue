<template>
  <div id="app" class="container">
    <div id="nav">
      <Menu />     
    </div>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
  export default {
    components:{
      Menu
    }
  }
</script>


<style>

</style>
