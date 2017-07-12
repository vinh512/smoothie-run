/* The job of this module is to receive the window object for use inside the function body.
   It also retrieves the constructors defined as part of the window.App namespace. */

(function (window) {

  var FORM_SELECTOR ='[data-smoothie-order="form"]';
  var CHECKLIST_SELECTOR = '[data-smoothie-order="checklist"]';
  var App = window.App || {};
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;

  // * instantiate a new Truck object with id & an instance of the DataStore object as the arguments
  // * myTruck is declared inside of this function. In order to interact with the myTruck object, export it to the global namespace
  var myTruck = new Truck('Truck-01', new DataStore());
  window.myTruck = myTruck;

  var checkList = new CheckList(CHECKLIST_SELECTOR);
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler( function (data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });
})(window);
