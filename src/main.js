//Ex 1
var ButtonView = Backbone.View.extend({
	render: function(){
		$(this.el).html('<button>I do nothing!</button>');
	}
});

btn = new ButtonView({
	el: $('.my-button')
});

btn.render();
