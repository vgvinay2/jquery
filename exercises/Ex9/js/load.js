$(document).ready(function() {
 $bloghead = $('div#blog').find('h3');
 $bloghead.each(function(idx) {
  var $h3 = $(this), 
  $newdivision = $('<div id="target">');
  $newdivision.clone().insertAfter($h3);
  $div = $h3.next('div#target');
  $h3.data('contentDiv', $div);
 });
 var $firsth3 = $('#blog h3');
 $firsth3.click(function(e) {
  e.preventDefault();
  var href = $(this).find('a').attr('href');
  var tempArray = href.split('#');
  var id1 = '#' + tempArray[1];
  var link="data/blog.html"+" "+id1;
  $(this).data('contentDiv').load(link);
  });
});
