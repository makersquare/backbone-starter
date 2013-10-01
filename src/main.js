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


//Ex 2
var ProfileView = Backbone.View.extend({
	initialize: function(options){
		this.name = options.name;
		this.age = options.age;
	},
	render: function(){
		$(this.el).html(this.name + "," + this.age)
	}
});

var profileView = new ProfileView({
	name: 'Bob',
	age: 45,
	el: $('.profile')
})

profileView.render();

