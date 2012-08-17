$(document).ready(function () {
 product = {};
 brand =[];
 brand_index=0;
 color = [];
 color_index = 0;
 $.ajax({
    url : 'data/products.json',
    type : 'GET',
    dataType : 'json',
    cache :'true',
    success : function(json) {
     product = json;
     display();
    }
 });
 function display() {
   $.each(product,function(idx) {
    $image = $('<img/>').attr({src:"images/"+product[idx].url,height : 150,width:150,id:idx}).appendTo('div#right');
    $('img#'+idx).data('info',{'brand':product[idx].brand.replace(" ",""),'color':product[idx].color,'sold_out':product[idx].sold_out});
   });
   brand = checkbox_creator(brand,"brand",brand_index);
   color = checkbox_creator(color,"color",color_index);
   checkbox_available(); 
   $('input').click(function(){      
   $('img').hide();
   color_check=0;
   brand_check = 0;
   checked = [];
   checked_color = [];
   $.each($('input#brand'),function(idx){
    if($(this).is(':checked')) {
     checked[brand_check] = brand[idx];
     brand_check++; 
    }
   });      
   $.each($('input#color'),function(idx){
    if($(this).is(':checked')) {
     checked_color[color_check] = color[idx];
     color_check++; 
    }
   });

   if(checked.length == 0) {
    checked = brand;
   }
   if(checked_color.length == 0) {
    checked_color = color;
   }
   $.each(checked,function(index){
    $.each(checked_color,function(idx){
     $.each(product,function(id) {
      if($('input.available').is(':checked')) {
       if ($('img#'+id).data('info').brand == checked[index] && $('img#'+id).data('info').color == checked_color[idx] && $('img#'+id).data('info').sold_out =="0") {
        $('img#'+id).show();
       }
      }
      else {
       if ($('img#'+id).data('info').brand == checked[index] && $('img#'+id).data('info').color == checked_color[idx]) {
         $('img#'+id).show();
       }
      }
     });
    });
   });
  });
 }
 function checkbox_creator(array,type,index) {
  $head = $('<h3/>');
  $head.text(type)
  $head.appendTo('div#left');
  array[0] = product[0][type].replace(" ","")
  $.each(product,function(idx){
   if ($.inArray(product[idx][type].replace(" ",""), array) == -1) {
    index++;
    array[index] = product[idx][type].replace(" ","")
   }   
  });
  $.each(array,function(idx) {
   $input=$('<input type="checkbox">'+array[idx]+'</input></br>')
   $input.attr({id:type,'class':array[idx]}) 
   $input.appendTo('div#left')
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
 });
