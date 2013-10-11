(function () {

	// create underscore template 
	var productTemplateHtml = $('#templates .product').html();
	var productTemplate = _.template(productTemplateHtml);	

	// make the product view
	window.ProductView = Backbone.View.extend({
		
		className: 'product',

		initialize: function (options) {
		}, 
		
		render: function() {
			var newHtml = productTemplate( this.model.toJSON() );
			return $(this.el).html( newHtml );
	    }
	});

})();