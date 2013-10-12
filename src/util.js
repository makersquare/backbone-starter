//
// Change underscore template interprolation syntax from <%= %> to {{ }}
// This is needed to avoid erb's interprolation syntax
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

// Add our own utility functions to underscore
_.mixin({
  getTemplate: function (name) {
    return _.template( $('#templates .' + name).html() );
  }
});



// Create an event aggregator for adding products to cart
window.userEvents = _.extend({}, Backbone.Events);