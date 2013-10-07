(function () {

  window.InventoryView = Backbone.View.extend({
    events: {
      'click .add-shirts': 'addShirts'
    },
    addShirts: function (e) {
      var type = $(e.currentTarget).data('type');
      
      var myShirts = this.options.shirts;

      for (var s = 0; s < myShirts.length; s++){
        
        var eachShirts = myShirts[s]
        
        if (type === 'small') {
          var newSmall = myShirts[s].get('small');
          newSmall += 1;
          //myShirts[s].set({ small: newSmall });
          eachShirts.set(type, newSmall)
        } else if (type === 'medium') {          
          var newMedium = myShirts[s].get('medium');
          newMedium += 1;
          //myShirts[s].set({ medium: newMedium });
          eachShirts.set(type, newMedium)
        } else if (type === 'large') {
          var newLarge = myShirts[s].get('large');
          newLarge += 1;
          //myShirts[s].set({ large: newLarge });
          eachShirts.set(type, newLarge)
        }
      }
      // TODO: Write a for loop to iterate through this.options.shirts and
      // add +1 to each of that shirt's `type` inventory.
      // For example, if type === 'small', then add +1 to every small stock
      // in each shirt in this.options.shirts. Use .set(???) for this.
    }
  });

})();
