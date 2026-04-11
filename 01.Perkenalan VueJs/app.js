var app = new Vue({
  el: "#app",
  data: {
    maximum: 50,
    products: null,
    cart: [],
  }, 
  mounted: function() {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.products = data;
    })
  },
  methods: {
    addItem: function(product) {
      this.cart.push(product);
    }
  }
});
