var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

$('#post-link').click(function(e){
  e.preventDefault();
})

var firstEquipment = $('.equipment-long-menu');
var firstEquipmentVisual = false;
$('#first-equipment-link').click(function(){
  if (!firstEquipmentVisual) {
    firstEquipment.show(200)
	} else {
    firstEquipment.hide(200)
  }
  firstEquipmentVisual = !firstEquipmentVisual;
})

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
    catigories.show(200)
   //	catigories.addClass('out');
	} else {
    catigories.hide(200)
	//	catigories.removeClass('out');
  }
  visibility = !visibility;
})

$(document).scroll(function(){
  if (visibility) {
    catigories.hide(200)
   // catigories.removeClass('out');
    visibility = false;
  }
})

var catigoriesItem = '';
$('.header-search-catigories-list li a').click(function(e) {
  $('#showCatigories').text(e.target.innerHTML)
  console.log($('#showCatigories').html()) //= e.target.innerHTML
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

jQuery(function($){
	$(document).mouseup(function (e){ 
		var div = $("#e-mail"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
          $('#e-mail').removeClass('e-mail-out');
          hideEmail = !hideEmail 
		}
	});
});

function copyEmail() {
  navigator.clipboard.writeText(document.getElementById('e-mail-addres').innerHTML)
}


