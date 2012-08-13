$(document).ready(function() {
 $('img').each(function(idx, el) {
 console.log(
   'Element ' + idx +
   'has the following alt attribute: ' +
   $(el).attr('alt')
 );
});
 
 form = $('label[for=q]').closest('form').addClass('new')
 console.log(form)

 var $li = $('ul#myList li.current').removeClass('current');
 console.log($li);
 console.log($li.next('li').addClass('current'));

 select = $('div#specials select')
 console.log(select.parent().siblings().find('input'));

 var $slideshow=$('ul#slideshow li');
 console.log(($slideshow.first()).addClass('current'));
 console.log(($slideshow.first().siblings()).addClass('disabled'));
});




