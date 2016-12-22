$(document).ready(function() {

	$(".menu-toggle").click(function() {
		var menu = $(this).siblings(".menu");
		var menuToggle = $(this);
		var label = $(this).siblings(".menu-label");
		if (menu) {
			// console.log("Menu was clicked");
			menu.toggleClass("menu-opened");
			menuToggle.toggleClass("menu-opened");
			label.toggleClass("menu-opened");
			// if(list.hasClass("listClosed")) {
			// 	list.removeClass("listClosed");
			// 	$(this).removeClass("hide");
			// }
			// else {
			// 	list.addClass("listClosed");
			// 	$(this).addClass("hide");
			// }
		}
	});
});