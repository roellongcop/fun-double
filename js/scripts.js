 var slickPrimarySecondary = {
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   // infinite: true,
   // autoplaySpeed: 3000,
   // autoplay: true,
 };

 var slickNavigator = {
   slidesToShow: 1	,
   slidesToScroll: 1,
   asNavFor: '.navsss',
   speed: 500,
   dots: true,
   focusOnSelect:true,
   centerMode: false,
   infinite: true,
   fade: true,
   autoplaySpeed: 3000,
   autoplay: true,
 };


$('.primary').slick(slickPrimarySecondary);
$('.navigator').slick(slickNavigator)

$('.d-none').removeClass('d-none')