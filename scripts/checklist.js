(function(window) {
  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    // creates a reference to the element
    this.$element = $(selector);

    if (this.$element.lenght === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  /* Create and assemble the subtree of elements using the order data object passed in */
  function Row(order) {
    // create the DOM elements that consists of a row. (HTML tag, object making up attributes)
    var $div = $('<div></div>', {'data-smoothie-order': 'checkbox', 'class': 'checkbox'});
    var $label = $('<label></label>');
    var $checkbox = $('<input></input>', {type: 'checkbox', value: order.emailAddress});

    // create string description of the order
    var description = order.size + ' ';
    if (order.boost) {
      description += order.boost + ' ';
    }
    description += order.smoothie + ', ';
    description += ' (' + order.emailAddress + ')';
    description += ' [' + order.boba + 'x]';

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    // holds onto the DOM representation of the row in an instance variable
    this.$element = $div;
  }

  CheckList.prototype.addRow = function (order) {
    // create a new instance of a row using the 'order' info passed in
    var rowElement = new Row(order);

    // add the new row instance's $element to property to that of the checklist
    this.$element.append(rowElement.$element);
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);
