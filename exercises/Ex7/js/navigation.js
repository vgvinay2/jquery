$(document).ready(function() {
 var $menu = $('ul#nav');


$('ul#nav li').hover(function() {$(this).find('ul').attr({'class':'hover'}).slideDown(200)},function(){$(this).find('ul').slideUp(200)});


});

