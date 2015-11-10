function resize () {
	document.getElementsByTagName('header')[0].style['min-height'] = window.innerHeight+'px';	
}
resize();
window.onresize = function() {
	resize();
}

// function tab (tab_name) {
// 	var tabs = document.getElementsByClassName(tab_name)[0].getElementsByClassName('tabs')[0];
// 	var tab_items = document.getElementsByClassName(tab_name)[0].getElementsByClassName('tab_item');
// 	tabs.addEventListener("click", function(e) {
// 		var count = 0;
// 		var target = e.target;		
// 		var generalchildcount = target.parentNode.childElementCount;
// 		for(var k = 0; k<generalchildcount; k++){
// 			tabs.children[k].classList.remove('active');
// 			tab_items[k].style.display= "none"		}			
// 		if (target.previousElementSibling != null) count++		
// 		tab_items[count].style.display= "block";		
// 		target.classList.add('active')
// 	}, true)
// 	tabs.children[0].classList.add('active')
// }
// tab("top_phone");
// tab("tabs_header");

$(document).ready(function() {
	$(".fancybox").fancybox();

	$.stellar({
		resposive: true
	});

	$(".owl-carousel").owlCarousel({
		loop: true,
		responsive: {
			0 : {
				items:1,
				nav:true
			}
		},
			navText: ""
	});

	

	// function wResize() {
	// 	$("header").css("height", $(window).height());
	// }
	// wResize();
	
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header  .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header  .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");
	
	$(".contacts_top .tab").click(function() {
		$(".contacts_top  .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");
	

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});

$(window).load(function() {
	$(".top_header h1").animated("fadeInDown","fadeOut");
	$(".top_header h2").animated("fadeInUp","fadeOut");
	$(".tabs_header .wrapper").animated("flipInY");
	$(".profi_item").animated("fadeInRight", "fadeOutRight");
	$(".s_profi form").animated("zoomInRight","fadeOut");
	$(".s_back h3").animated("fadeInUp");
	$("footer").animated("fadeInUp","fadeOut");
});