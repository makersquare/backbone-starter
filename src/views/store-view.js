(function () {

window.StoreView = Backbone.View.extend({

    initialize: function (options) {
        this.listenTo(this.collection, 'add', this.newProduct)
    },

    newProduct: function (product) {
        product.view = new ProductView({ model: product });

        product.view.render();
        $(this.el).append( product.view.el );
    }
});

})();