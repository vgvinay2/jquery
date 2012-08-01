$(document).ready(function () {
 $('ul#slideshow li').hide();
 $('ul#slideshow').insertBefore($('div#header'));
 $('ul#slideshow li:first').addClass('active').show();
 var total=$('ul#slideshow li').length;
 $text=$('<font>total no slides: </font>');
 $text.insertAfter('ul#slideshow');
 $no_of_slides=$('<input>').attr({value:total,disabled:true})
 $no_of_slides.insertAfter($text);
 $slide_number=$('<font>Current slide no: </font>');
 $slide_number.insertAfter($no_of_slides);
 $slide_no=$('<input id="slide_no">').attr({value:"1",disabled:true})
 $slide_no.insertAfter($slide_number);
 slideshow();
});

function slideshow() {
 var $active = $('ul#slideshow li.active');
 var $next = $('ul#slideshow li.active').next().length;
 if($next > 0) {
  var $slide = $('#slideshow li.active').next();
 }
 else {
  var $slide = $('#slideshow li:first');
 }
 var current = $slide.index()+1;
 $active.fadeOut(2000,function(){
 $active.removeClass('active');
 $slide.fadeIn(1500,function(){slideshow()}).addClass('active');
 $slide_no.attr({value:current});
 });
}

