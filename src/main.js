(function() {

	// create prodcut model instance
	// var product = new Product({});

	// var shoe2 = new Product({name: "Cole Hahns", price: 9.99});
	// create product view instance and pass it the instance of the product model
	// var productView = new ProductView({ 
	// 	model: product 
	// });

	// create a new inventory collection
	var inventory = new Inventory();

	// create a new storeView
	var storeView = new StoreView({
		collection: inventory,
		el: '#store'
	});


	inventory.add([
		{name: 'Air Jordans', price: 89.99 }, 
		{name: "Cole Hahns", price: 9.99},
		{name: "Cowboy Hat", price: 19.99},
		{name: "Blue jacket", price: 9.89}
	]);

	// render the view and console log
	// productView.render();
	// console.log('new instance of jordans', jordans.el);
	// $('#store').append(productView.el)

})();

