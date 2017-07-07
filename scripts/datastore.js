(function(window) {
  // get a reference to the namespace, if it exists.
  var App = window.App || {};

  function DataStore() {
    console.log('running the Datastore function');
    this.data = {};
  }

  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  }

  DataStore.prototype.get = function (key) {
    return this.data[key];
  }

  DataStore.prototype.getAll = function () {
    return this.data;
  }

  // attach DataStore to the App object namespace
  App.DataStore = DataStore;

  // reassign the global App property to the modified App now with a DataStore property
  window.App = App;

})(window);
