$(document).ready(function() {
 $bloghead = $('div#specials').find('form');
 $newdivision = $('<div id="target">');
 $newdivision.appendTo($bloghead);
 $div = $bloghead.find('div#target');
 $select=$bloghead.find('select');
 $bloghead.find('li.buttons').css({display:'none'});
 function changing(json,value)
{
$('div#target').html("");
$('<h2/>').text(json[value].title).appendTo('div#target');
$('<p/>').text(json[value].text).appendTo('div#target');
$image=$('<img/>').attr({src:json[value].image}).appendTo('div#target');
}


 $select.change(function() {

var selects = $(this).find('option');
var value;
for(var i=0;i<selects.length;i++)
{
if(selects[i].selected)
{value=selects[i].value;
}
}
if(value=="" || value==null) {
$('div#target').html("Please select a day");
}
else
{
$.ajax({
    url : 'data/specials.json',
    type : 'GET',
    dataType : 'json',
    cache :'true',
  success : function(json) {
  changing(json,value);        

 }

    
});
 }
});
});

