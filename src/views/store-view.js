(function() {

	window.StoreView = Backbone.View.extend({

		collection: Inventory,

		initialize: function(options) {
			this.listenTo(this.collection, 'add', this.onProductAdd);
		},

		onProductAdd: function(newProduct) {
			// console.log('this product has been added: ', newProduct.get('name'));
			// console.log('product has been added: ', this.collection);

			var product = new ProductView({ model: newProduct });

			var productView = product.render();

			$(this.el).append(productView);
		}

	});

})();