<template>
  <div class="">
      <!-- <ul>
        <router-link to="/">   <li>    Home    </li>  </router-link>
        <router-link to="/about" >    <li>    Sobre nós   </li>    </router-link>

          <router-link to="/categorias"> 

                <li>  Categorias  </li>
          </router-link>

          <router-link to="produtos"> 

            <li>  Produtos    </li>
          </router-link>
      </ul> -->
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">
                        Home               
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">
                        Sobre nós               
                </router-link>
            </li>
                    <li class="nav-item">
                <router-link class="nav-link" to="categorias">
                        Categorias               
                </router-link>
            </li>
                    <li class="nav-item">
                <router-link class="nav-link" to="produtos">
                        Produtos               
                </router-link>
            </li>
        </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>

</style>