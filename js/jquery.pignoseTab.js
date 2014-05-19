/*
 *
 *   PIG NOSE TAB 1.4
 *   ================
 *
 *   @ date         2014-05-19
 *   @ author       sungmin. han (http://kennethan.dothome.co.kr)
 *   @ copyright    pig-nose
 *   @ license      'MIT license' - (http://rem.mit-license.org)
 *
 */

(function($) {
	$.fn.pignoseTab = function(options) {
		var settings = $.extend({
		}, options);

		return this.each(function(idx, elem) {
			var _this = this;
			var $elem = $(elem);
			var $ul   = $elem.children('ul').addClass('pignose_tab_group');
			var $li   = $ul.children('li').addClass('pignose_tab_list');
			var $btn  = $li.children('a:not(".pignose_tab_more")').addClass('pignose_tab_btn');
			var $more = $li.children('a.pignose_tab_more');
			var $con  = $li.children('div').addClass('pignose_tab_con');

			if($elem.hasClass('pignose_tab_responsive_btn'))
			{
				$(window).bind('resize', function() {
					var margin = 0;
					if($more.length)
					{
						margin = ($elem.width() - ($more.innerWidth(true) + $more.offset().left));
					}

					$btn.each(function() {
						console.log($elem.innerWidth());
						$(this).outerWidth(parseInt(($elem.width() - margin) / $btn.length));
						$(this).parent().width($(this).outerWidth(true));
					});
				});

				$(window).trigger('resize');
				$(window).bind('load', function() { $(this).trigger('resize'); });
			}
			
			if($li.filter('.active').length < 1) $li.eq(0).addClass('active');
			$li.filter('.active').children('.pignose_tab_btn, .pignose_tab_con').addClass('active');

			$elem.height($con.filter('.active').position().top + $con.filter('.active').outerHeight());
			$li.filter(':last').children('.pignose_tab_btn').addClass('last_btn');

			$btn.bind('click', function(event) {
				if(!$(this).hasClass('active'))
				{
					$li.removeClass('active').children('.pignose_tab_btn, .pignose_tab_con').removeClass('active');
					$(this).parent().addClass('active').children('.pignose_tab_btn, .pignose_tab_con').addClass('active');
					$elem.height($(this).next().position().top + $(this).next().outerHeight());
					$(window).trigger('resize');
				}
				event.preventDefault();
			});
		});
	};
})(jQuery)