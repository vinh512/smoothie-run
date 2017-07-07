(function (window) {

  var App = window.App || {};

  // db will be a DataStore instance to store orders
  function Truck(truckId, db) {
    this.truckId = truckId;
    this.orders = db; // the truck instance will have its own DataStore instance
  }

  // the Truck instance has a DataStore instance as one of its properties which has access to the DataStore methods
  Truck.prototype.createOrder = function (order) {
    this.orders.add(order.emailAddress, order)
  }

  Truck.prototype.deliverOrder = function (customerId) {
    this.orders.remove(customerId);
  }

  App.Truck = Truck;
  window.App = App;

})(window);
