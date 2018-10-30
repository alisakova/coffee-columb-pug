var $input = $('#range');
var $output = $('#output');
var $price = $('._price');
var $value = $('._value');
var $input2 = $('#range-2');
var $output2 = $('#output-2');
var $price2 = $('._price-2');
var $value2 = $('._value-2');

$(document).ready(function() {
  if ($input.length) {
    function updateOutput(value) {
      $output[0].textContent = value;
      if (value >= 10) {
        $value[0].textContent = '~ 5 кг в месяц';
        $price[0].textContent = '7800 руб.'
      }
      if (value >= 16) {
        $value[0].textContent = '~ от 8 кг';
        $price[0].textContent = 'по договорённости'
      }
      if (value < 10) {
        $value[0].textContent = '~ 3 кг в месяц';
        $price[0].textContent = '6000 руб.'
      }
    }

    $input.on('input', function(e) {
      updateOutput(e.target.value);
    });

    $input.rangeslider({
      polyfill: false
    });

    updateOutput($input[0].value);
  }
});

$(document).ready(function() {
  if ($input2.length) {
    function updateOutput(value) {
      $output2[0].textContent = value;
      if (value >= 10) {
        $value2[0].textContent = '~ 5 кг в месяц';
        $price2[0].textContent = '7800 руб.'
      }
      if (value >= 16) {
        $value2[0].textContent = '~ от 8 кг';
        $price2[0].textContent = 'по договорённости'
      }
      if (value < 10) {
        $value2[0].textContent = '~ 3 кг в месяц';
        $price2[0].textContent = '6000 руб.'
      }
    }

    $input2.on('input', function(e) {
      updateOutput(e.target.value);
    });

    $input2.rangeslider({
      polyfill: false
    });

    updateOutput($input2[0].value);
  }
});
