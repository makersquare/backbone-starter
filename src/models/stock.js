// The parseFloat() function converts the incoming newPrice from a string to floating integer.
// 
// 
// Sets the new price value on the model

(function(){

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
    	this.price = parseFloat(newPrice);
    	this.set({ price: this.price });
      	console.log('Updating', this.get('name'), 'price to:', this.get('price'));
    }
  });

  })();
