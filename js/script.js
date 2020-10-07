var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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

$('#phone-btn-popup').click(function(e){
  e.preventDefault();
})

let letMeHide = true;
let longmenushow = false;
let shortmenushow = false;
var firstEquipment = $('.equipment-long-menu');
var secondEquipment = $('.equipment-short-menu');
var firstEquipmentVisual = false;
var secondEquipmentVisual = false;
var otherMenu = $('.hidemenu');
var otherMenuSecond = $('.hidemenu_second');
var darknestBlock = $('.shadowBackground');
var resulSearchPopup = $('.header-search-resultPopup');
var HideResulSearch = true;
$('#first-equipment-link').click(function(){
  if (!firstEquipmentVisual) {
    firstEquipment.fadeIn(200);
    darknestBlock.fadeIn(400);
    letMeHide = false;
    shortmenushow = false;
    otherMenuSecond.fadeOut(200);
    secondEquipment.fadeOut(200);
    secondEquipmentVisual = false;
	} else {
    longmenushow = false;
    otherMenu.fadeOut(200);
    firstEquipment.fadeOut(200);
    darknestBlock.fadeOut(400);
    letMeHide = true;
  }
  firstEquipmentVisual = !firstEquipmentVisual;
})

$('#second-equipment-link').click(function(){
  if (!secondEquipmentVisual) {
    otherMenu.fadeOut(200);
    firstEquipment.fadeOut(200);
    longmenushow = false;
    firstEquipmentVisual = false;
    secondEquipment.fadeIn(200);
    darknestBlock.fadeIn(400);
    letMeHide = false;
	} else {
    shortmenushow = false;
    otherMenuSecond.fadeOut(200);
    secondEquipment.fadeOut(200);
    darknestBlock.fadeOut(400);
    letMeHide = true;
  }
  secondEquipmentVisual = !secondEquipmentVisual;
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
    otherMenu.fadeIn(400)
	} else {
    otherMenu.fadeOut(400)
  }
  longmenushow = !longmenushow;
})

$('#SecondMenu').click(function() {
  if(!shortmenushow) {
    otherMenuSecond.fadeIn(400)
  } else {
    otherMenuSecond.fadeOut(400)
  }
  shortmenushow = !shortmenushow;
})

darknestBlock.click(function(){
    if(!hidePhonePopup) {
      hidePhonePopup = !hidePhonePopup
      darknestBlock.fadeOut(150); 
      setTimeout(function(){$('.header-wrap-second').css('z-index','0')}, 220)
      setTimeout(function(){$('.header-search-eq').css('z-index','-1')}, 220)
      $('.words-tel-popup').fadeOut(200)
      $('#phone-btn-popup').css('background','#34a853')
    }
    firstEquipmentVisual = false;
    secondEquipmentVisual = false;
    longmenushow = false;
    shortmenushow = false;
    otherMenuSecond.fadeOut(200)
    secondEquipment.fadeOut(200)
    otherMenu.fadeOut(200);
    firstEquipment.fadeOut(200);
    darknestBlock.fadeOut(400);
    letMeHide = true;
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
// $('#e-mail').on('click', function(){
//   if(hideEmail) {
//   $('#e-mail').addClass('e-mail-out');
//   hideEmail = !hideEmail
// } else {
//   $('#e-mail').removeClass('e-mail-out');
//   hideEmail = !hideEmail
//   }
// })

$('#e-mail').on('click', function(){
  if(hideEmail) {
    $('#e-mail').css('background','#5cb774')
    $('.e-mail-copy').fadeIn(200);
    hideEmail = !hideEmail
} else {
    $('#e-mail').css('background','#34a853')
    $('.e-mail-copy').fadeOut(200);
    hideEmail = !hideEmail
  }
})

jQuery(function($){
	$(document).mouseup(function (e){ 
		var div = $("#e-mail"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
         // $('#e-mail').removeClass('e-mail-out');
          $('.e-mail-copy').fadeOut(200)
          $('#e-mail').css('background','#34a853')
          hideEmail = !hideEmail 
		}
	});
});

function copyEmail() {
  navigator.clipboard.writeText(document.getElementById('e-mail-addres').innerHTML)
}

let hidePhonePopup = true;

$('#phone-btn-popup').on('click', function(){
  if(hidePhonePopup) {
    // setTimeout(function(){
    //   $('.header-search-eq').css('z-index','-11111')
    // }, 13)
    // setTimeout(function(){
    //   $('.header-wrap-second').css('z-index','-11110')
    // }, 15)
    catigories.hide(200);
    if (visibility) {
      visibility = false;
    }
    $('.header-search-eq').css('z-index','-11111')
    $('.header-wrap-second').css('z-index','-11110')
    letMeHide = false;
    $('#phone-btn-popup').css('background','#5cb774')
    darknestBlock.fadeIn(250);
    $('.words-tel-popup').fadeIn(300);
    hidePhonePopup = !hidePhonePopup
    otherMenuSecond.fadeOut(10)
    secondEquipment.fadeOut(10)
    otherMenu.fadeOut(10);
    firstEquipment.fadeOut(10);
    firstEquipmentVisual = false;
    secondEquipmentVisual = false;
    longmenushow = false;
    shortmenushow = false;
} else {
    darknestBlock.fadeOut(200);
    letMeHide = true;
    $('#phone-btn-popup').css('background','#34a853')
    $('.words-tel-popup').fadeOut(200);
    hidePhonePopup = !hidePhonePopup
    setTimeout(function(){$('.header-wrap-second').css('z-index','0')}, 220)
    setTimeout(function(){$('.header-search-eq').css('z-index','-1')}, 220)
  }
})

$('.popup-closebtn div').on('click', function() {
    darknestBlock.fadeOut(200);
    letMeHide = true;
    $('#phone-btn-popup').css('background','#34a853')
    $('.words-tel-popup').fadeOut(200);
    hidePhonePopup = !hidePhonePopup
    setTimeout(function(){$('.header-wrap-second').css('z-index','0')}, 220)
    setTimeout(function(){$('.header-search-eq').css('z-index','-1')}, 220)
})

$('.header-search-input input').focus(function(){
    $('.header-search-eq').css('z-index','-11111')
    resulSearchPopup.fadeIn(200);
    darknestBlock.fadeIn(200);
})

$('.header-search-input input').blur(function(){
  $('.header-search-eq').css('z-index','-1')
  resulSearchPopup.fadeOut(200);
  darknestBlock.fadeOut(200);
})

$(window).on('load resize', function(){
  if($(window).width() <= 767) {
    $('.services-product').attr('src', './img/steammachineMOBILE.png')
    $('.services-corp').attr('src', './img/rationalMOB.png')
    $('.services .swiper-slide img').attr('src', './img/slidermobile.png')
  } else {
    $('.services-product').attr('src', './img/steammachine.png')
    $('.services-corp').attr('src', './img/smallabat.png')
    $('.services .swiper-slide img').attr('src', './img/serviceslide.jpg')
  }
})

let ShowTextOffers = false;

$('.offers-btn').on('click', function(){
  if(!ShowTextOffers) {
    $('#hidesecondtextoffers').show(400)
    $('.offers-btn').text('-') 
    ShowTextOffers = true
  } else {
    $('#hidesecondtextoffers').hide(400)
    $('.offers-btn').text('+') 
    ShowTextOffers = false
  }
})

// function to1660(source){
// ... let procent = source/19.2;
// ... console.log((procent/100)*1660 + ' for 1660!')
// ... } 

// function to1460(source){
// ... let procent = source/19.2;
// ... console.log((procent/100)*1460 + ' for 1460!')
// ... } 