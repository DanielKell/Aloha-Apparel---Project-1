// Flickity settings

$('.flickity').flickity({
  // options
  cellAlign: "left",
  contain: true,
  cellSelector: '.carousel-cell',
  prevNextButtons: false,
  autoPlay: 3000,
});

// number on cart

var itemCount = 0;

$('.add-to-cart').click(function (){
  itemCount ++;
  $('.cart-img').html(itemCount).css('display', 'block');
}); 

// sign up form alert box

$(function(){

    $('.signup').on('submit', function(event){
      event.preventDefault();

      if ( $( '#email'). val().length !== 0 ) {
            alert('Thanks for signing up!');

      } else {
            alert('Please enter a valid email address!');
      }

    });
});
