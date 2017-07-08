/* The job of this module is to receive the window object for use inside the function body.
   It also retrieves the constructors defined as part of the window.App namespace. */

(function (window) {

  var App = window.App || {};
  var Truck = App.Truck;
  var DataStore = App.DataStore;

  // instantiate a new Truck object with id & an instance of the DataStore object as the arguments
  var myTruck = new Truck('Truck-01', new DataStore());
  console.log()

  // myTruck is declared inside of this function. In order to interact with the myTruck object, export it to the global namespace
  window.myTruck = myTruck;

})(window);
