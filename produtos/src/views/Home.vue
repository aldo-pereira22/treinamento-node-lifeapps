<template>
  <div class="mt-5">

          <h1>Home</h1>

      <div class="div">

        <div class="card" style="width: 18rem;">
            <img src="../assets/img/logo.png" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Produtos eletrônicos!</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>


              <div class="card" style="width: 18rem;">
            <img src="../assets/img/logo.png" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>
            

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
  .div{
    display: flex;
  }

  .card {
    margin-left: 20px;
  }
</style>
