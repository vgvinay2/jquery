$(document).ready(function () {
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
     $.each(json,function(idx) {
      $image = $('<img/>').attr({src:"images/"+json[idx].url,height : 150,width:150}).addClass(json[idx].brand.replace(" ","")).addClass(json[idx].color).addClass(json[idx].sold_out).appendTo('div#right');
     });
     brand_checkbox(json);
     color_checkbox(json);
     $('input').click(function(){      
      $('img').hide();
      brand_check = 0;
      checked = [];
      checked_color = [];
      $.each($('input#brand'),function(idx){
       if($(this).is(':checked')) {
        checked[brand_check] = brand[idx];
        brand_check++; 
       }
      });

      color_check=0;
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
        if($('input.available').is(':checked')) {
         $('img.'+checked_color[idx] + '.'+checked[index]+'.0').show();
        } 
        else {
         $('img.'+checked_color[idx] + '.'+checked[index]).show();
        }
       })
      })
     });
    }
 });

function brand_checkbox(products) {
  $head = $('<h3>Brands:</h3>');
  $head.appendTo('div#left');
  brand[0] = products[0].brand.replace(" ","")
  $.each(products,function(idx){
   if ($.inArray(products[idx].brand.replace(" ",""), brand) == -1) {
    brand_index++;
    brand[brand_index] = products[idx].brand.replace(" ","")
   }   
  });
  $.each(brand,function(idx) {
   $input=$('<input type="checkbox">'+brand[idx]+'</input></br>')
   $input.attr({id:"brand",'class':brand[idx]}) 
   $input.appendTo('div#left')
  });
 }

 function color_checkbox(products) {
  $text = $('<h3>Colors:</h3>');
  $text.appendTo('div#left');
  color[0] = products[0].color
  $.each(products,function(idx){
   if ($.inArray(products[idx].color, color) == -1) {
    color_index++;
    color[color_index] = products[idx].color
   }   
  });
  $.each(color,function(idx) {
   $input=$('<input type="checkbox">'+color[idx]+'</input><br/>')
   $input.attr({id:"color",'class':color[idx]})
   $input.appendTo('div#left')
  });
   $text_available = $('<h3>Availability:</h3>');
   $text_available.appendTo('div#left');
   $available=$('<input type="checkbox"> show Availability </input><br/>')
   $available.addClass('available')
   $available.appendTo('div#left')
  } 
 });
