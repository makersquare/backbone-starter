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


//Backbone Events
var WhinyView = Backbone.View.extend({
	events: {
    'click .my-button': 'whine'
  },

  whine: function () {
    alert('owwwwwwwwwwwwww');
  },

  render: function () {
    $(this.el).html('<button class="my-button">o_o</button>');
    return this; // "this.el", when calling the method as view.render()
  }
});

var view = new WhinyView();
$('body').append( view.render().el ); // render func should return "this.el" if the element 'el' is not chained when calling render();



//Backbone object's on, off function
var DummyView = Backbone.View.extend({});

var view = new DummyView();

view.on('random-event-name', function (x,y,z) {
  console.log('bluh!', x, y, z);
});

view.trigger('random-event-name', 11, 22, 33);
view.off('random-event-name');
view.trigger('random-event-name', 99, 88, 77); // no reponse!

