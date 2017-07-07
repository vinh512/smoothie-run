(function(window) {
  // get a reference to the namespace, if it exists.
  var App = window.App || {};

  // DataStore constructor, has empty object data property
  function DataStore() {
    console.log('DataStore instantiated');
    this.data = {};
  }

  // adds a property (key/value pair) to the data object
  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  }

  // retrieves the value of the specified key
  DataStore.prototype.get = function (key) {
    return this.data[key];
  }

  // retrieves the entire object
  DataStore.prototype.getAll = function () {
    return this.data;
  }

  // removes a property from the object
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  }

  // attach DataStore to the App object namespace
  App.DataStore = DataStore;

  // reassign the global App property to the modified App now with a DataStore property
  window.App = App;

})(window);
