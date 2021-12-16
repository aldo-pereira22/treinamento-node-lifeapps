<template>
<div class="">

  <div id="app" class="container">
    <Menu />     
    <hr>
    <div id="nav">
    </div>
    <router-view/>
  </div>
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
  /* .container {
    background-color:#ffff;
  } */

  h1 {
    text-align: center;
  }
</style>
