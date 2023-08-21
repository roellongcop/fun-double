 var slickPrimarySecondary = {
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   infinite: false
 };

 var slickNavigator = {
   slidesToShow: 1	,
   slidesToScroll: 1,
   asNavFor: '.navsss',
   speed: 500,
   dots: true,
   focusOnSelect:true,
   centerMode: false,
   infinite: false,
     fade: true,

 };


$('.primary').slick(slickPrimarySecondary);
$('.navigator').slick(slickNavigator)