<template>
  <div class="">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

                <router-link class="nav-link" to="/">
                    <h3> <img src="../assets/img/logo.png" alt=""> </h3>                
                </router-link>              

                <router-link class="nav-link" to="/">
                    <h3> INICIO </h3>                
                </router-link>
                <router-link class="nav-link" to="/about">
                   <h3> SOBRE NÓS</h3>  
                </router-link>
                <router-link class="nav-link" to="/categorias">
                      <h3> CATEGORIAS </h3>                
                </router-link>
                  
                <router-link class="nav-link" to="/produtos">
                  <h3> PRODUTOS </h3>                  
                </router-link>
          </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
  img {
    width: 100px;
  }
</style>