<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-nav">
        <router-link class="navbar-brand" to="/">首頁</router-link>
        <router-link class="nav-link" to="/user/cart">商品列表</router-link>
        <router-link class="nav-link" to="/user/author">認識Sunny</router-link>
        <router-link class="nav-link" to="/login">後臺管理</router-link>
      </div>
    </div>
  </nav>
  <div class="container">
  <img class="img-fluid rounded mx-auto d-block" src="https://upload.cc/i1/2022/07/02/mtsYDH.png" alt="">
  <div class="row" >
    <div class="col-3-md" v-for="item in productsPurification" :key="item.id">
    <div class="card" style="width: 18rem;">
    <img src="{item.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{ item.title }</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data () {
    return {
      products: {},
      productsPurification: {},
      productsMeditation: {},
      productsEnergyHealing: {}
    }
  },
  name: 'Home',
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((response) => {
        this.productsPurification = response.data.products.filter((product) => product.category === '淨化')
        console.log('products:', this.productsPurification)
      })
    }
  },
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
    this.getProducts()
  }
}
</script>
