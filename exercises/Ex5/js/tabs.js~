$(document).ready(function() {

 $module = $('div.module').hide();
 var $newlist = $('<ul id="tab"></ul>');
 $newlist.insertBefore($module);
 

 $module.each(function(idx, el) {
  var $newlistitem = $('<li></li>');
  $newlistitem.id=idx;
  $newlistitem.appendTo($newlist);
  $newheader=($module).eq(idx).find('h2').clone();
  ($module).eq(idx).find('h2').detach();
  $newheader.appendTo($newlistitem);
 
 });

$('ul#tab li').click(function() {
 $module.hide();
 $('ul#tab li').removeClass('current');
 var index = $(this).index();
 $('div.module').eq(index).show();
 $(this).addClass('current');
 });


});

