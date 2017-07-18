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
  $('#add-item').html(itemCount).css('display', 'block');
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

// Smoothscroll

$(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 90
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
