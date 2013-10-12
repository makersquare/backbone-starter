(function () {

    window.ProductView = Backbone.View.extend({
        className: 'product',

        template: _.getTemplate('product'),


        initialize: function (options) {
            this.listenTo(this.model, 'change', this.render);
        },

        events: {
            'click .buy': 'buy'
        },

        buy: function () {
            window.userEvents.trigger('add-to-cart', this.model);
            console.log(parseFloat($('#total').html()));
            var oldTotal = parseFloat($('#total').html());
            var newTotal = oldTotal + this.model.get('price');
            newTotal = Math.round(newTotal * 100) / 100;
            $('#total').html(newTotal);
        },

        render: function () {
            var newHtml = this.template( this.model.toJSON() );
            $(this.el).html(newHtml);
        }

    });
})();