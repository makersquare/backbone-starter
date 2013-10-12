(function () {
    window.inventory = new Inventory();
    window.cart = new Inventory();

    var storeView = new StoreView({
        collection: inventory,
        el: '#products'
    });

    inventory.add([
        { name: "Shoes" },
        { name: "Socks", price: 3.99 },
        { name: "Boots", price: 24.99 }
        ]);

    var cartView = new ShoppingCartView({
        collection: cart,
        el: '#cart'
    });

})();