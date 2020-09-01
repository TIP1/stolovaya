var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});


var header_nav = document.querySelector('.header-search-eq');
console.log(header_nav.style.top);

var lastScrollTop = 0;
$(window).scroll(function(event){
var st = $(this).scrollTop();
if (st > lastScrollTop){
   console.log(1)
} else {
   console.log(2)
}
lastScrollTop = st;
});