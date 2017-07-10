(function(window) {

  var App = window.App || {};
  var $ = window.jQuery;

  // FormHandler module should be usable with any <form> element
  function FormHandler(selector) {
    console.log('Form Handler instantiated');
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

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('Setting submit handler for form');

    // The submit event occurs when a form is submitted.
    this.$formElement.on('submit', function(e) {
      e.preventDefault();

      var data = {};

      // * the 'this' here refers to the <form> element
      // * the serializeArray() method creates an array of objects from the form values.
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value)
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;

})(window)
