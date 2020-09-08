var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

// function OpacityUp(JQel){
//   let op = 0
//   JQel.css('display','block')
//   function temporary(){
//     op += 0.05
//     JQel.css("opacity", op)
//     if(op<1){setTimeout(temporary(), 10)}
//   }
//   temporary()
// }

// function setOpacityUp(nameOfClass) {
//      var el = document.getElementsByClassName(nameOfClass);
//      var op = 0;
//      function func() {
//          if (op > 1)
//              return;
//          el.style.opacity = op;
//          op += 0.1;
//          setTimeout(func, 20);
//      }
//      if(op==0){func()}
// }

// function setOpacityDown(nameOfClass) {
//      var el = document.getElementsByClassName(nameOfClass);
//      var op = 1;
//      function func() {
//          if (op < 0)
//              return;
//          el.style.opacity = op;
//          op -= 0.1;
//          setTimeout(func, 20);
//      }
//      if(op==1){func()}
// }

$('#post-link').click(function(e){
  e.preventDefault();
})
let letMeHide = true;
let longmenushow = false;
var firstEquipment = $('.equipment-long-menu');
var firstEquipmentVisual = false;
var firstmenu = $('#hidemenu');
var darknestBlock = $('.shadowBackground')
$('#first-equipment-link').click(function(){
  if (!firstEquipmentVisual) {
    firstEquipment.fadeIn(200)
    darknestBlock.fadeIn(400)
    letMeHide = false
	} else {
    longmenushow = false
    firstmenu.fadeOut(200)
    firstEquipment.fadeOut(200)
    darknestBlock.fadeOut(400)
    letMeHide = true
  }
  firstEquipmentVisual = !firstEquipmentVisual;
})

var header = $('.header-search-eq');
scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( (scrolled > 1 && scrolled > scrollPrev) && letMeHide ) {
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

$('#LongMenu').click(function() {
  if (!longmenushow) {
    firstmenu.fadeIn(400)
	} else {
    firstmenu.fadeOut(400)
  }
  longmenushow = !longmenushow;
})

darknestBlock.click(function(){
    firstEquipmentVisual = !firstEquipmentVisual;
    longmenushow = false
    firstmenu.fadeOut(200)
    firstEquipment.fadeOut(200)
    darknestBlock.fadeOut(400)
    letMeHide = true
})

$(document).scroll(function(){
  if (visibility) {
    catigories.hide(200)
   // catigories.removeClass('out');
    visibility = false;
  }
})

$('.header-search-eq .container a').click(function(e){
   e.preventDefault()
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



