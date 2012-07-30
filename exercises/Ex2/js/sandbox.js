$(document).ready(function() {
    $('img').each(function(idx, el) {
    console.log(
        'Element ' + idx +
        'has the following alt attribute: ' +
        $(el).attr('alt')
    );
});

console.log($('label[for=q]').closest('form').attr({ 
'class' : 'new'})
);
var $li=$('ul#myList li.current');
console.log($('ul#myList li.current').attr({'class':null 
})
);

console.log($li.next('li').attr({'class':'current'}));
var $select = $('div#specials select')
console.log($select.parent().siblings().children());

var $slideshow=$('ul#slideshow li');
console.log(($slideshow.first()).attr({'class' : 'current'}));
console.log(($slideshow.first().siblings()).attr({'class' : 'disabled'}));

});




