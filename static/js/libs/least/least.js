/**
*** least.js 2
*** Author: Kamil Czujowski - @kamilczujowski
*** Version: 2.2.0
*** Made with ♥	in Hamburg, Germany.
*** http://kamilczujowski.de
**/

(function($){ 
	$.fn.least = function(options) {
		var settings = $.extend({
			'random': true,
			'scrollToGallery': true,
			'HiDPI': false
		}, options);

		return this.each(function() {

			/* Open Images */
			function intipreview(object, path, caption) {
				/*var */
				var close = $('<figure class="close"></figure>'),
					img = $('<img src="' + path + '"/>'),
					thumb = $('li a')

				/* Load img */
				img.load(
					function() {
						if ( caption.length ) {
							object.html('<article>' + caption + '</article>');
						} else {
							object.html('');
						}

						object						
							.prepend(img)
							.append(close)
							.slideDown('slow')
							thumb.removeClass('load');
					}
				);
				
				/* Close Fullscreen */		
				close.on(
					'click',
					function() {
						$('.least-preview').slideToggle('slow');
						thumb.removeClass('active');
					}
				);
			}

			/* Thumbnail */
			$(this).find('li a').click(
				function(e) {

					/* var */
					var $$ = $(this),
						path = $$.attr('href'),
						preview = $('.least-preview'),
						previewImg = preview.children('img'),
						caption = $$.attr('data-caption') || '';

					/* Same Image */
					if ( previewImg.length && path === previewImg.attr('src') ) {
						preview.slideToggle('slow');

						$$.toggleClass('active');
							
						return;
					}

					/* Other Image */
					if ( previewImg.length ) {

						$$.addClass('active');
						$('.least-gallery li a.active').removeClass('active');

						preview.slideUp(
							'slow',
							function() {
								intipreview(
									preview,
									path,
									caption
								);
							}
						);

					/* First Image */
					} else {
						intipreview(
							preview,
							path,
							caption
						);
					}

					/* Add Loading bar */
					$$.addClass('load active');
				}
			);
			
			/* Random Images - looked up from jquery forum */
			if(settings.random) {
				$('.least-gallery').each(function(){
					var ul = $(this),
						li = ul.children('li');
						
						li.sort(function() {
							var	temp = parseInt( Math.random()*8, null ),
								OddEven = temp%4,
								PosNeg = temp>2 ? 1 : -1;
								
								return ( OddEven*PosNeg );
						})
						.appendTo(ul);
				});
			}

			/* Scroll to Top */
			if(settings.scrollToGallery) {
				$(this).find('li a').click(
					function(e) {
						e.preventDefault();

						$('html, body').animate(
							{ 
								scrollTop: $('#least').offset().top
							}, 500 
						);
					}
				);
			}

			/* Support Retina Image - Inspiration https://bensmann.no */
			if(settings.HiDPI) {
				if(window.devicePixelRatio > 1) {
					/* var's */
					var image_thumb = $('#least img'),
						image_big = $('#least a');

					/* Replace images with @2x */
					for(var i = 0; i < image_thumb.length && image_big.length; i++) {
						var src = image_thumb[i].src,
							href = image_big[i].href,
							j = src.lastIndexOf('.'),
							k = href.lastIndexOf('.');

							src = src.substr(0,j) + '@2x' + src.substr(j);
							href = href.substr(0,k) + '@2x' + href.substr(k);

							image_thumb[i].src = src;
							image_big[i].href = href;
					}
				}
			}
		});
	};
})(jQuery);