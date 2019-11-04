$(document).ready(function () {
$("body").prognroll({
	height: 2,
	color: "#ec1c1c",
	custom: false
});

$('.main-menu ul li').removeClass('active');
var path = window.location.pathname;
$('.main-menu ul li a').each(function() {
	var href = $(this).attr('href');
	if(path.slice(1).substring(0, href.length) === href) {
		$(this).parent('li').addClass('active');
	}
});

$('.logo-litera').each(function(){
let ths = $(this);
ths.html(ths.html().replace('E', '<span>E</span>') );
});

$('.search').click(function(){
$('.search-field').stop().slideToggle();
$('.search-field input[type=text]').focus();
});

$(document).keyup(function(e){
	if(e.keyCode== 27) {
$('.search-field').slideUp();
}
}).click(function(){
$('.search-field').slideUp();
});
$('.search-wrap').click(function(e) {
	e.stopPropagation();
});

$('.top-line').after('<div class="mobile-menu">' );
$('.top-menu').clone().appendTo('.mobile-menu');
$('.mobile-menu-button').click(function() {
$('.mobile-menu').stop().slideToggle();
});

$('.col-item').hover(function(){
	ths = $(this);
	lnk = ths.closest('.col-item').find('h4 a');
	lnk.addClass('hover');
}, function(){
	lnk.removeClass('hover');
});
});