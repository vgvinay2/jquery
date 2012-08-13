$(document).ready(function() {
 $.ajax({
    url : 'data/specials.json',
    type : 'GET',
    dataType : 'json',
    cache :'true',
    success : function(json) {
    changing(json);        
    }
   });

 $bloghead = $('div#specials').find('form');
 $newdivision = $('<div id="target">');
 $newdivision.appendTo($bloghead);
 $div = $bloghead.find('div#target');
 $select=$bloghead.find('select');
 $bloghead.find('li.buttons').css({display:'none'});
 
 function changing(json) {
  $select.change(function() {
   var value=$select.val();
   if(value == "" || value == null) {
    $('div#target').html("Please select a day");
   }
   else {
    $('div#target').html("");
    $('<h2/>').text(json[value].title).appendTo('div#target');
    $('<p/>').text(json[value].text).appendTo('div#target');
    $image=$('<img/>').attr({src:json[value].image}).appendTo('div#target');
   }
  });
 
 } 
});

