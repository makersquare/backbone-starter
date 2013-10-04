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
	    this.price = parseFloat(newPrice);
	    this.set({ price: this.price });
			console.log('Updating', this.get('name'), 'price to:', this.get('price'));
    }
  });

})();
