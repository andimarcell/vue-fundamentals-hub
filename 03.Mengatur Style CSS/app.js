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
    computed: {
        sliderState: function() {
            return this.style.sliderStatus ? 'd-flex' : 'd-none';
        }
    },
    methods: {
        addItem: function (product) {
            this.cart.push(product);
        }
    }
});