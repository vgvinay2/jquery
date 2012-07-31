$(document).ready(function() {
 var $bloghead = $('div#blog').find('h3');
 $bloghead.children().removeAttr('href');
 $bloghead.click(function() {
 $(this).parent().siblings().find('p').slideUp(500);
 $(this).next().slideDown(500);
 });
});

