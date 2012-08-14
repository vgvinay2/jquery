$(document).ready(function() {
 $module = $('div.module').hide();
 var $newlist = $('<ul id="tab"></ul>');
 $newlist.insertBefore($module);
 
 $module.each(function(idx, el) {
  var $newlistitem = $('<li></li>');
  $newlistitem.id=idx;
  text_value = $(el).find('h2').text();
  $newlistitem.text(text_value);
  $newlistitem.appendTo($newlist);
 });
 
 $('div.module:first').show();
 $('ul#tab li:first').addClass('current');
 
 $('ul#tab li').click(function() {
  $module.hide();
  $('ul#tab li').removeClass('current');
  var index = $(this).index();
  $('div.module').eq(index).show();
  $(this).addClass('current');
 });

});

