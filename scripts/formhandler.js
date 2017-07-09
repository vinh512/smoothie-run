(function(window) {

  var App = window.App || {};
  var $ = window.jQuery;

  // FormHandler module should be usable with any <form> element
  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    // create a reference to the form element
    this.$formElement = $(selector);

    // ensures the jQuery wrapped selection contains any matching elements
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function() {
    this.$formElement.on('submit', function(e) {
      e.preventDefault();
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;

})(window)
