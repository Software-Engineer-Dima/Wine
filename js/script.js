


$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger,.header__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.footer__body_row-767px__burger').click(function(event) {
		$('.footer__body_row-767px__burger,.footer__burger,.footer__line-767px').toggleClass('activate');
		$('body').toggleClass('lock');
	});
});