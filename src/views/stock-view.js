 // Listen for StockView's model's changes in initialize.

(function () {

  window.StockView = Backbone.View.extend({
    className: 'stock',
    initialize: function(){
    	this.listenTo(this.model, 'change:price', this.render);
    },
	});
});