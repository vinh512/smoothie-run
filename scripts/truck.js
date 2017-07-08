(function (window) {

  var App = window.App || {};

  // orders will be a DataStore instance to store orders
  function Truck(truckId, dataStoreInstance) {
    this.truckId = truckId;
    this.orders = dataStoreInstance;
  }

  // * the Truck instance has a DataStore instance as one of its properties which has access to the DataStore methods
  // * order will be an object that has an email address as its key and the drink as its value
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for: ' + order.emailAddress);
    this.orders.add(order.emailAddress, order)
  }

  // once again using the DataStore property, we use its 'remove' method
  Truck.prototype.deliverOrder = function (customerId) {
    this.orders.remove(customerId);
  }

  Truck.prototype.printOrders = function () {
    var customerIdArray = Object.keys(this.orders.getAll());

    console.log('Truck #' + this.truckId + ' has pending orders: ');

    // * inside a callback function, 'this' is not assigned to an object
    // * recall that functions are also objects - one of the methods of a function object is bind().
    // * bind takes an object argument and returns a new version of the function with the argument object as the value of 'this'
    // * outside of the forEach body, 'this' refers to the Truck instance which is what bind(this) refers to
    customerIdArray.forEach(function(id) {
      console.log(this.orders.get(id));
    }.bind(this));
  }

  App.Truck = Truck;
  window.App = App;

})(window);
