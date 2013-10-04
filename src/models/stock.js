/* 
 * stock.js
 *
 */

(function () {

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {

      this.newPrice = parseFloat(newPrice)
      console.log('Updating', this.get('name'), 'price to:', this.newPrice);
    }
  });

})();
