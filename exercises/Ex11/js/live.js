$(document).ready(function() {
 count=0;
 $("#add").live("click",function(){
  count++;
  $table = $('table#container');
  $tr=$('<tr/>').addClass('p'+count);
  $tr.appendTo($table);
  $('<td align="center"/>').text(count).appendTo($('tr.p'+count));
 });
 $("tr").live("click",function(){
  $now=$(this);
  var id = $now.attr('class');
  var tempid = id.split('p');
  var id1 =tempid[1];
  if(count==id1) {
   $(this).remove();
   count--;
  }
  else {
    $(this).siblings().css({backgroundColor:'white'});
    $(this).css({backgroundColor:'red'});

  }
 });
});
