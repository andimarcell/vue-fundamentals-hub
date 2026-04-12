var app = new Vue({
    el: '#app',
    data: {
        maximum: 50,
        products: null,
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2'],
            inputwidth: 60,
            sliderStatus: false,
        }
    },
    mounted: function() {
        fetch('products.json')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        });
    },
    filters: {
      currencyFormat: function(value) {
          return 'Rp' + Number.parseFloat(value).toFixed(3);
      }  
    },
    computed: {
        sliderState: function() {
            return this.style.sliderStatus ? 'd-flex' : 'd-none';
        }
    },
    methods: {
        before: function(el) {
            el.className = 'd-none';
        },
        enter: function(el) {
            var delay = el.dataset.index * 100;
            setTimeout(function() {
                el.className = 'row d-flex bm-3 align-items-center animated fadeInRight'; 
            }, delay);
        },
        leave: function(el) {
            var delay = el.dataset.index * 100;
            setTimeout(function() {
                el.className = 'row d-flex bm-3 align-items-center animated fadeOutRight'; 
            }, delay);
        },
        addItem: function (product) {
            var productIndex;
            var productExist = this.cart.filter(function (item, index) {
               if(item.product.id == Number(product.id)) {
                productIndex = index;   
                return true;
               } else {
                   return false;
               }
            });

            if (productExist.length) {
                this.cart[productIndex].qty++;
            } else {
                this.cart.push({product: product, qty: 1});
            }
        }
    }
});