/*
Author       : Theme-Family
Template Name: Muydi -Photograph & Videography Html5 Website Template
Version      : 1.0.1
*/
(function($) {
    "use strict";
	

	
	/*--------------------------------------------------------------
       PRELOADER
      --------------------------------------------------------------*/
		/*PRELOADER JS*/
			$(window).load(function() { 
				$('.atf-status').fadeOut();
				$('.atf-preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/

	
		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 10){  
                $('.navbar-area').addClass("atf-sticky-header");
            }
            else{
                $('.navbar-area').removeClass("atf-sticky-header");
            }
        });
		 // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
        });

		//**================= Sticky =====================**//
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.navbar-expand-md').addClass('navbar-collaps');
				$('.atf-back-to-top').addClass('open');
			} else {
				$('.atf-header-area').removeClass('navbar-collaps');
				$('.atf-back-to-top').removeClass('open');
			}
		  });

		//**===================Scroll UP ===================**//

			if ($('.atf-back-to-top').length) {
			  $(".atf-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}
			
			
		// ParallaxSlider Slider Custom jQuery	
			var wind = $(window);
				var parallaxSlider;
				var parallaxSliderOptions = {
					speed: 1500,
					autoplay: true,
					parallax: true,
					loop: true,
					on: {
						init: function () {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								$(swiper.slides[i]).find('.atf-swiper-img').attr({
									'data-swiper-parallax': 0.75 * swiper.width
								});
							}
						},
						resize: function () {
							this.update();
						}
					},
					pagination: {
						el: '.atf-slider-parallax .atf-parallax-slider .swiper-pagination',
						dynamicBullets: true,
						clickable: true
					},
					navigation: {
						nextEl: '.atf-slider-parallax .atf-parallax-slider .next-control',
						prevEl: '.atf-slider-parallax .atf-parallax-slider .prev-control'
					}
				};
				parallaxSlider = new Swiper('.atf-slider-parallax .atf-parallax-slider', parallaxSliderOptions);
				// Var Background image
				var pageSection = $(".atf-swiper-img, section");
				pageSection.each(function (indx) {
					if ($(this).attr("data-background")) {
						$(this).css("background-image", "url(" + $(this).data("background") + ")");
					}
				});
				
			/* --------------------------------------------------------
				   LightCase jQuery Active
				--------------------------------------------------------- */
				$('a[data-rel^=lightcase]').lightcase({
					transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
					swipe: true,
					maxWidth: 1170,
					maxHeight: 600,
				});
			
		/*--------------------------------------------------------------
			START SERVICE SLIDER
			--------------------------------------------------------------*/	
			
			$("#tf-home-active").owlCarousel({
				margin:3,
				nav:false,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				smartSpeed:450,
				autoplay:true,
				autoplayTimeout:6000,
				loop:true,
				dots:true,
				responsive:{
					0:{
						items:1
					},
					768:{
						items:2
					},
					1000:{
						items:3
					}
				}
			});
			

		/*--------------------------------------------------------------
			TESTIMONIAL SLIDER
		  --------------------------------------------------------------*/	

			$('#testimonial-slider').owlCarousel({
				margin: 10,
				autoplay: true,
				autoplayTimeout: 4000,
				nav: false,
				smartSpeed: 1000,
				dots: true,
				autoplayHoverPause: true,
				loop: true,
				responsiveClass:true,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 2
					}
				}
			});
		
		/*END Testimonials LOGO*/
		
		/*--------------------------------------------------------------
			NEWS SLIDER
		  --------------------------------------------------------------*/	
		$('#blog-slider').owlCarousel({
				margin: 5,
				autoplay: false,
				autoplayTimeout: 4000,
				nav: false,
				smartSpeed: 1000,
				dots: true,
				autoplayHoverPause: true,
				loop: true,
				responsiveClass:true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 2
					},
					1000: {
						items: 3
					}
				}
			});
		
		/*END NEWS SLIDER */

	/*--------------------------------------------------------------*/ 
	/*--------------------------------------------------------------
		MAILCHAMP
      --------------------------------------------------------------*/		
			
		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		
	/*--------------------------------------------------------------
		Porfolio isotope
      --------------------------------------------------------------*/
 
			// image loaded portfolio init
		
				$('.atf-portfolio-grid').imagesLoaded(function() {
					$('.portfolio-filter').on('click', 'button', function() {
						var filterValue = $(this).attr('data-filter');
						$grid.isotope({
							filter: filterValue
						});
					});
					var $grid = $('.atf-portfolio-grid').isotope({
						itemSelector: '.grid-item',
						percentPosition: true,
						masonry: {
							columnWidth: '.grid-item',
						}
					});
				});        
					
				// portfolio Filter
				$('.portfolio-filter button').on('click', function(event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			
		//**===================END Porfolio isotope ===================**//	
		
	/*--------------------------------------------------------------
		WOW SCROLL SPY
      --------------------------------------------------------------*/
		
		/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:10,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			})
			/*END PARTNER LOGO*/
	  
		 
			  
			 var wow = new WOW({
				  //disabled for mobile
					mobile: false
				});

			wow.init();
			
	/*--------------------------------------------------------------
		START PARALLAX JS
      --------------------------------------------------------------*/	
			(function () {

				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 
				} else {
					$(window).stellar({
						horizontalScrolling: false,
						responsive: true
					});
				}

			}());
	
	/*--------------------------------------------------------------
		END PARALLAX JS
      --------------------------------------------------------------*/	
			

    
})(jQuery);

