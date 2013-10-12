(function () {

    // Model
    window.Product = Backbone.Model.extend({
        defaults: {
            price: 9.99
        }
    });

    // Collection
    window.Inventory = Backbone.Collection.extend({
        model: Product
    });

})();