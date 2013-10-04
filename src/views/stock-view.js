/* 
 * stock-view.js
 *
 */

(function () {

  window.StockView = Backbone.View.extend({
    className: 'stock',
		initialize: function () {
		  this.listenTo(this.model, 'change:price', this.render );
		  //console.log('New price for', this.model.get('name'), this.model.get('price'));
		},
		render: function () {
			var priceTemplateHtml = $('#templates .stock').html();
			var priceTemplate = _.template(priceTemplateHtml);
			var newHtml = priceTemplate({ name: this.model.get('name'), price: this.model.get('price') });
			console.log(newHtml);
			$(this.el).html(newHtml);
		}
  });

})();
