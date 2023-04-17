
/* Smooth Scrolling */
jQuery(document).ready(function ($) {
	$('.smoothscroll').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});

	/* Highlight the current section in the navigation bar */
	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

		handler: function (event, direction) {

			var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '01%'

	});


	/*Make sure that header-background-image height is equal to the browser height.*/
	$('header').css({ 'height': $(window).height() });
	$(window).on('resize', function () {

		$('header').css({ 'height': $(window).height() });
		$('body').css({ 'width': $(window).width() })
	});

	/*Creates grey nav bar*/
	$(window).on('ready', function () {
		var y = $(window).scrollTop();
		var nav = $('#nav-wrap');

		nav.addClass('opaque').fadeIn('fast');
	});
});

/*Makes responsive headline responsive when hovered */
document.addEventListener('DOMContentLoaded', function () {
	const nameElement = document.getElementById('name');
	const nameText = nameElement.textContent;
	let newNameHTML = '';

	for (const letter of nameText) {
		newNameHTML += letter === ' ' ? ' ' : `<span class="hover-letter">${letter}</span>`;
	}

	nameElement.innerHTML = newNameHTML;
});