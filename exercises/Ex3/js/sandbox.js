$(document).ready(function() {
  for(var i = 0; i < 5 ; i = i + 1) {
   var $myNewElement = $('<li>New element</li>');
   $myNewElement.appendTo('ul#myList');
  }

//$('ul li:odd').remove();
var $myNewheader = $('<h2>New header</h2>');
var $myNewparagraph = $('<p>New paragraph</p>');
$module=$('div.module').last();
$myNewheader.appendTo($module);
$myNewparagraph.appendTo($module);

$selecter=$('select');
var $newoption = $('<option value="Wednesday">Wednesday</option>');
$newoption.appendTo($selecter);


var $newdivision = $('<div class="module"></div>');

$newdivision.insertAfter($module);
$('img:first').clone().appendTo($newdivision);

});

