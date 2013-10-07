(function () {

  window.InventoryView = Backbone.View.extend({
    events: {
      'click .add-shirts': 'addShirts'
    },
    addShirts: function (e) {
      var type = $(e.currentTarget).data('type');
      //console.log('Adding one of every', type, 'shirt for', this.options.shirts);

      //console.log(this.options.shirts.length);
      for (var s = 0; s < this.options.shirts.length; s++){
        if (type === 'small') {
          //console.log(this.options.shirts[s].get('small'));
          var newSmall = this.options.shirts[s].get('small');
          newSmall += 1;
          //console.log(newSmall);
          this.options.shirts[s].set({ small: newSmall });
        } else if (type === 'medium') {
          //console.log(this.options.shirts[s].get('medium'));
          var newMedium = this.options.shirts[s].get('medium');
          newMedium += 1;
          //console.log(newMedium);
          this.options.shirts[s].set({ medium: newMedium });
        } else if (type === 'large') {
          //console.log(this.options.shirts[s].get('large'));
          var newLarge = this.options.shirts[s].get('large');
          newLarge += 1;
          //console.log(newLarge);
          this.options.shirts[s].set({ large: newLarge });
        }
        
      }
      // TODO: Write a for loop to iterate through this.options.shirts and
      // add +1 to each of that shirt's `type` inventory.
      // For example, if type === 'small', then add +1 to every small stock
      // in each shirt in this.options.shirts. Use .set(???) for this.
    }
  });

})();
