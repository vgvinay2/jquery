$(document).ready(function() {
 store = [];
 $('input#total').val("0");
 i = 0;
 quantity = [];
 count = 0;
 total = 0;
 subtotal = [];
 json = {}
 $.ajax({ 
   url :'data/shopping_cart.json',
   type : 'GET',
   dataType : 'json',
   cache :'true',
   success : function(data) {
    json=data;
    display();
   } 
 });   

function display() {
    $table = $('<table id="shop"/>');
    $table.appendTo($('div#addcart'));
    $tabs = $('div.header');
    $tab_product = $('<font/>').attr({id:"product"});
    $tab_product.text('Products');
    $tab_cart = $('<font/>').attr({id:"cart"})
    $tab_product.appendTo($tabs);
    $tab_cart.text('My Cart(0)').appendTo($tabs);
    $('div#showcart').hide();
    $table_cart = $('<table border="1"/>').attr({id:'cart_table'});
    $table_cart.appendTo($('div#showcart'));

    $tablehead_cart = $('<tr/>');
    $table_head_img = $('<th/>');
    $title_img = $('<p/>');
    $title_img.text('Image').appendTo($table_head_img);
    $table_head_img.appendTo($tablehead_cart);
    
    $table_head_title = $('<th/>');
    $title_head = $('<p/>');
    
    $table_head_price = $('<th/>');
    $price_head = $('<p/>');

    $table_head_quantity = $('<th/>');
    $quantity_head = $('<p/>');

    $table_head_subtotal = $('<th/>');
    $subtotal_head = $('<p/>');
    
    $title_head.text('Title').appendTo($table_head_title);
    $table_head_title.appendTo($tablehead_cart);
    $price_head.text('Price').appendTo($table_head_price);
    $table_head_price.appendTo($tablehead_cart);
    
    $quantity_head.text('Quantity').appendTo($table_head_quantity);
    $table_head_quantity.appendTo($tablehead_cart);
    
    $subtotal_head.text('Subtotal').appendTo($table_head_subtotal);
    $table_head_subtotal.appendTo($tablehead_cart);    
    
    $tablehead_cart.appendTo($table_cart);
    $.each(json,function(idx){     
     $tablerow = $('<tr/>');
     $table_img = $('<td/>');
     $image = $('<img/>').attr({src:json[idx].img});
     $image.appendTo($table_img);
     $table_data = $('<td/>');
     $title = $('<p><b>'+json[idx].title+'</b></p>');
     $category = $('<p>'+json[idx].category+'</p>');
     $description = $('<p><small>'+json[idx].details+'</small></p>');
     $price = $('<p><b>price:'+json[idx].price +'</b></p>');     
     $table_button = $('<td/>');
     $button = $('<button>Add to Cart</button>').attr({'class':"add",id:idx});
     $button.appendTo($table_button);
     $title.appendTo($table_data);
     $category.appendTo($table_data);
     $description.appendTo($table_data);
     $price.appendTo($table_data);
     $table_quantity = $('<td/>');
     $quantity_text = $('<font/>');
     $quantity = $('<input type="text"/>');
     $quantity_text.text('Quantity').appendTo($table_quantity);
     $quantity.val('1').appendTo($table_quantity);
     $table_img.appendTo($tablerow);
     $table_data.appendTo($tablerow);
     $table_quantity.appendTo($tablerow);
     $table_button.appendTo($tablerow);
     $tablerow.appendTo($table);


    });
     $('button.add').click(function(){
      check = $.inArray(parseInt($(this).attr('id')),store);
      if (check == -1) {
       count++;
       $('font#cart').text('My Cart('+count+')') 
       store[i] = parseInt($(this).attr('id'));
       quantity[i] = parseInt($(this).parent().parent().find('input').val());
       i++;     
      }
      else {
       quantity[check] += parseInt($(this).parent().parent().find('input').val());
      }
      showcart(quantity);
     });

}

    function showcart(quantity) {
     $table_cart.find('tr:gt(0)').remove();
     $.each(store,function(idx){
      $tablerow_cart = $('<tr/>');
      subtotal[idx] = json[store[idx]]["price"] * quantity[idx];     
      $table_img_cart = $('<td/>');
      $img_cart = $('<img/>').attr({src:json[store[idx]].img});
      $img_cart.appendTo($table_img_cart);
      $table_img_cart.appendTo($tablerow_cart);

      $table_data_cart = $('<td/>');
      $title_cart = $('<p>'+json[store[idx]]["title"]+'</p>');
      $title_cart.appendTo($table_data_cart);
      $table_data_cart.appendTo($tablerow_cart);
     
      $table_price_cart = $('<td/>');
      $price_cart = $('<p>'+json[store[idx]]["price"]+'</p>');
      $price_cart.appendTo($table_price_cart);
      $table_price_cart.appendTo($tablerow_cart);
     
      $table_quantity_cart = $('<td/>');
      $quantity_cart = $('<input type="text"/>').attr({id:idx,'class':"quant"}).val(quantity[idx]);
      $quantity_cart.appendTo($table_quantity_cart);
      $table_quantity_cart.appendTo($tablerow_cart);

      $table_subtotal_cart = $('<td/>');
      $subtotal_cart = $('<p>'+subtotal[idx]+'</p>');
      $subtotal_cart.appendTo($table_subtotal_cart);
      $table_subtotal_cart.appendTo($tablerow_cart);
     
      $table_remove_cart = $('<td/>');
      $remove_cart = $('<button>remove</button>').attr({id:idx,'class':"remove"});
      $remove_cart.appendTo($table_remove_cart);
      $table_remove_cart.appendTo($tablerow_cart);
      $tablerow_cart.appendTo($table_cart);
     });
     total(subtotal);
     $('button.remove').click(function() {     
     store.splice(parseInt($(this).attr('id')),1);
     quantity.splice(parseInt($(this).attr('id')),1);
     subtotal.splice(parseInt($(this).attr('id')),1);
     i--;
     count--;
     $('font#cart').text('My Cart('+count+')') 
     showcart(quantity);
    });

    $('input.quant').blur(function(){
     index = $(this).attr('id');
     quantity[index] = $(this).val();
     if(quantity[index] == 0) {
      store.splice(parseInt(index),1);
      quantity.splice(parseInt(index),1);
      subtotal.splice(parseInt(index),1);
      i--;
      count--;
      $('font#cart').text('My Cart('+count+')')           
     }      
     showcart(quantity);    
    });
    function total(subtotal) {
     total =0; 
     for(var i = 0;i < subtotal.length; i++) {
      total += subtotal[i];
    }
    $('input#total').val(total);
    
   }
   $tab_product.click(function(){
    $('div#showcart').hide();
    $('div#addcart').show();
   });
   $tab_cart.click(function(){
    $('div#addcart').hide();
    $('div#showcart').show();
   });
  } 

});


