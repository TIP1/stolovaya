var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});



var header = $('.header-search-eq');
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 1 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

var catigories = $('.header-search-catigories-list');
let visibility = false;
$('.header-search-catigories').click(function() {
  if (!visibility) {
   	catigories.addClass('out');
	} else {
		catigories.removeClass('out');
  }
  visibility = !visibility;
})

var basket = $('.header-search-store');
basket.hover(
function (){
 let pict = document.getElementById('basket');
 pict.src = './img/online-shopping-cart-white.png';
},
function (){
 let pict = document.getElementById('basket');
 pict.src = './img/online-shopping-cart.png';
})

let hideEmail = true;
$('#e-mail').on('click', function(){
  if(hideEmail) {
  $('#e-mail').addClass('e-mail-out');
  hideEmail = !hideEmail
} else {
  $('#e-mail').removeClass('e-mail-out');
  hideEmail = !hideEmail
  }
})

function copyEmail() {
  navigator.clipboard.writeText(document.getElementById('e-mail-addres').innerHTML)
}


