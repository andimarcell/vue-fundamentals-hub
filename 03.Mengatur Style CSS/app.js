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
            this.cart.push(product);
        }
    }
});