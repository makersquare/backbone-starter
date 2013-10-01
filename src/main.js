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

  whine: function(){
    alert('owwwwwwwwwwwwww');
  },

  render: function(){
    $(this.el).html('<button class="my-button">o_o</button>');
    return this; // "this.el", when calling the method as view.render()
  }
});

var view = new WhinyView();
$('body').append( view.render().el ); // render func should return "this.el" if the element 'el' is not chained when calling render();



//Backbone object's on, off function
var DummyView = Backbone.View.extend({});

var view = new DummyView();

view.on('random-event-name', function(x,y,z){
  console.log('\nbluh!', x, y, z);
});

view.trigger('random-event-name', 11, 22, 33);
view.off('random-event-name');
view.trigger('random-event-name', 99, 88, 77); // no reponse!



//listenTo, stopListening method
var DummyView = Backbone.View.extend({});

var ear = new DummyView();
var mouth = new DummyView();

ear.listenTo(mouth, 'shout', function(message){
  console.log('\nThe ear hears:', message);
});

mouth.trigger('shout', "EAR!! WHERE ARE YOU??");

// Stops listening to all 'shout' events on mouth
ear.stopListening(mouth, 'shout');

// ALTERNATIVE: Stops listening to ALL EVENTS on mouth
// ear.stopListening(mouth);

mouth.trigger('shout', "EAR!! EAR!!!!!");



//Ex 3
var DummyView = Backbone.View.extend({});

var dog = new DummyView();
var thief = new DummyView();
var alarm = new DummyView();

dog.listenTo(thief, 'scuffle', function(){
	console.log('----\nThe dog barks, woof!');
	dog.trigger('woof');
});

thief.listenTo(alarm, 'ring', function(){
	console.log('----\nOh no, that sounds like the alarm!');
});

thief.listenTo(dog, 'woof', function(){
	console.log('----\nAhhh!');
});

console.log("----\nThe thief makes a scuffle!");
thief.trigger('scuffle');

console.log("----\nThe alarm goes off!");
alarm.trigger('ring');



//Communicating between Backbone Views - Part 1
var radioStation = _.extend({}, Backbone.Events);

var DummyView = Backbone.View.extend({});
var view = new DummyView();

view.listenTo(radioStation, 'new_deal', function(deal){
	console.log("\nIt's a new deal! ", deal);
});

radioStation.trigger('new_deal', { name: 'Buy 1 Get 1 FREE'});


//Communicating between Backbone Views - Part 2
var radioStation = _.extend({}, Backbone.Events);

var BubbleView = Backbone.View.extend({
	initialize: function(options){
		this.size = options.size;
	},
	pop: function(){
		radioStation.trigger('pop', this.size);
	}
});

var BubbleCounterView = Backbone.View.extend({
	total: 0,
	initialize: function(options){
		this.listenTo(radioStation, 'pop', this.recordPop);
	},
	recordPop: function(bubbleSize){
		this.total += bubbleSize;
		console.log('\nTotal bubble size popped: ', this.total);
	}
});

var smallBubbleView = new BubbleView({ size: 2 });
var largeBubbleView = new BubbleView({ size: 17 });
var bubbleCounterView = new BubbleCounterView();

smallBubbleView.pop();
largeBubbleView.pop();


