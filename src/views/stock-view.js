 // Listen for StockView's model's changes in initialize.
 //  
 // Render function updates the 'el'ement using an underscore template.
 // 
 // Render the stock name and price.

(function () {

  window.StockView = Backbone.View.extend({
    className: 'stock',
    initialize: function(){
    	this.listenTo(this.model, 'change:price', this.render);
    },

		render: function(){
			var priceTemplateHtml = $('#templates .stock').html();
			var priceTemplate = _.template(priceTemplateHtml);
			var newTemplateHtml = priceTemplate({ name: this.model.get('name'), price: this.model.get('price') });
			$(this.el).html(newTemplateHtml);
		}
	});
});
