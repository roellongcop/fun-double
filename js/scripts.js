 var slickPrimarySecondary = {
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
   swipeToSlid: false,
   swipe: false
 };

 var slickNavigator = {
   slidesToShow: 1	,
   slidesToScroll: 1,
   asNavFor: '.navsss',
   speed: 500,
   dots: true,
   focusOnSelect:true,
   pauseOnHover: false,
   centerMode: false,
   fade: true,
   autoplay: true,
   autoplaySpeed: 3000

 };

$('.primary').slick(slickPrimarySecondary);
$('.navigator').slick(slickNavigator)