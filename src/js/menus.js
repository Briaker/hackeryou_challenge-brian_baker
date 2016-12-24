$(document).ready(function() {

	$(".menu-toggle").click(function() {
		var menuToggle = $(this);
		var label = menuToggle.siblings(".menu-label");
		var menu = menuToggle.parent().siblings(".menu");

		if (menu) {
			menu.toggleClass("menu-opened");
			menuToggle.toggleClass("menu-opened");
			label.toggleClass("menu-opened");
		}
	});

});