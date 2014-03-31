/*
 *
 *   PIG NOSE TAB 1.1
 *   ================
 *
 *   @ date         2014-03-31
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
			var $con  = $li.children('div').addClass('pignose_tab_con');
			
			if($li.siblings('.active').length < 1) $li.eq(0).addClass('active');
			$li.siblings('.active').children('.pignose_tab_btn, .pignose_tab_con').addClass('active');

			$elem.height($con.filter('.active').position().top + $con.filter('.active').outerHeight());
			$li.filter(':last').children('.pignose_tab_btn').addClass('last_btn');

			$btn.bind('click', function(event) {
				if(!$(this).hasClass('active'))
				{
					$li.removeClass('active').children('.pignose_tab_btn, .pignose_tab_con').removeClass('active');
					$(this).parent().addClass('active').children('.pignose_tab_btn, .pignose_tab_con').addClass('active');
				}
				event.preventDefault();
			});
		});
	};
})(jQuery)