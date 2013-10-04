/* 
 * stock.js
 *
 */

(function () {

	//Backbone Model
	/* 
	Backbone.Model.prototype.setByName = function(key, value, options) { 
	    var setter = {}; 
	    setter[key] = value; 
	    this.set(setter, options); 
	};
	*/
  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
	    this.newPrice = parseFloat(newPrice);
	    this.set('newPrice', this.newPrice);
			console.log('Updating', this.get('name'), 'price to:', this.newPrice);
    }
  });


})();
