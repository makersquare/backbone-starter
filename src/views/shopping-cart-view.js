(function () {

    window.ShoppingCartView = Backbone.View.extend({

        initialize: function () {
            this.listenTo(this.collection, 'add', this.addNewProduct);
            this.listenTo(window.userEvents, 'add-to-cart', this.addNewProduct);
        },

        addNewProduct: function (product) {
            product.view = new ProductView({ model: product });

            var buyItem = product.get('name') + " $" + product.get('price') + " <br />";
            product.view.render();
            $(this.el).append( buyItem );
        }
    });


})();