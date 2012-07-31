$(document).ready(function() {
 var search = $('label[for=q]').html();
 $input=$('input[name=q]').attr({value:search,
'class':'hint'
 });
 $('label[for=q]').remove();
 $input.focus(function() {
  $input.attr({value:null
 });
 $input.removeClass('hint');
 });
 $input.blur(function() {    
  if(this.value == null || this.value == "") {
   $input.attr({value:search,'class':'hint'
   });
  }
 });
});

