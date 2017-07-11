(function(window) {
  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);
    if (this.$element.lenght === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  function Row(smoothieOrder) {
    var $div =('<div></div>', {'data-smoothie-order': 'checkbox', 'class': 'checkbox'});
    var $label = $('<label></label>');
    var $checkbox = $('<input></input>', {type: checkbox, value: smoothieOrder.emailAddress});

    var description = smoothieOrder + ' ';
    if (smoothieOrder.boost) {
      description += smoothieOrder.boost + ' ';
    }
    description += smoothieOrder.smoothie + ', ';
    description += ' (' + smoothieOrder.emailAddress + ')';
    description += ' [' + smoothieOrder.boba + 'x]';
  }



  App.CheckList = CheckList;
  window.App = App;
})(window);
