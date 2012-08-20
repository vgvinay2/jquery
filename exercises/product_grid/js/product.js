$(document).ready(function () {
 products = {};
 brands =[];
 brand_index=0;
 colors = [];
 color_index = 0;
 $.ajax({
    url : 'data/products.json',
    type : 'GET',
    dataType : 'json',
    cache :'true',
    success : function(json) {
     products = json;
     wrapper();
    }
 });
 function wrapper() {
   display();
   brands = checkbox_creator(brands,"brand",brand_index);
   colors = checkbox_creator(colors,"color",color_index);
   checkbox_available();
   filter(); 
 }
 function display() {
  $(products).each(function(idx) {

   $image = $('<img/>');
   $image.attr({src:"images/"+(this).url,height : 150,width:150,id:idx});
   $image.attr({'data-brand':(this).brand,'data-color':(this).color,'data-available':(this).sold_out});
   $image.appendTo('div#right');
  });
 }

 function checkbox_creator(array,type,index) {
  $head = $('<h3/>');
  $head.text(type);
  $head.appendTo('div#left');
  array[0] = products[0][type];
  $(products).each(function(idx){
   if ($.inArray((this)[type], array) == -1) {
    index++;
    array[index] = (this)[type];
   }   
  });
  $(array).each(function(idx) {
   $input=$('<input type="checkbox">'+(this)+'</input></br>');
   $input.attr({id:type}); 
   $input.appendTo('div#left');
  });
  return array;
  }

 function checkbox_available() {
   $text_available = $('<h3>Availability:</h3>');
   $text_available.appendTo('div#left');
   $available=$('<input type="checkbox"> show Availability </input><br/>')
   $available.addClass('available')
   $available.appendTo('div#left')
 } 


 function checkbox_selected(array,type) {
   index = 0;
   checked = [];
   $('input#'+type).each(function(idx){
    if($(this).is(':checked')) {
     checked[index] = array[idx];
     index++; 
    }
   });
   if(checked.length == 0) {
    checked = array;
   }
  return checked;
 }

 function filter() {
  $('input').click(function(){      
   $('img').show();
   checked_brands = checkbox_selected(brands,"brand");
   checked_colors = checkbox_selected(colors,"color");
   $(products).each(function(id) {
    if ( $.inArray($('img#'+id).attr('data-brand'),checked_brands) == -1) {
     $('img#'+id).hide();
    }
   });    
   $(products).each(function(id) {
    if ( $.inArray($('img#'+id).attr('data-color'),checked_colors) == -1) {
     $('img#'+id).hide();
    }
   });    
   if ($('input.available').is(':checked')) {    
    $(products).each(function(id) {
     if ($('img#'+id).attr('data-available') == "1") {
      $('img#'+id).hide();
     }
    });        
   }      
  });
 }
});
