/****************************************
*
*  - PIG NOSE TAB
*  - DATE    2014-07-11
*  - UPDATE  2014-12-18
*  - AUTHOR  PIGNOSE (http://kennethan.dothome.co.kr)
*  - VERSION 2.0.0
*  - LICENCE MIT
*
****************************************/

(function($) {
	$.fn.pignoseTab = function(options) {
		var _this    = this;

		this.settings = $.extend({
			'callback'        : null,
			'animation'       : 'static',
			'animationTime'   : 300,
			'animationEasing' : 'easeInOutCubic'
		}, options);

		this.rendering = function(root, flag) {
			root.each(function(idx, elem) {
				if(typeof elem === 'undefined' || elem.length < 1) return;
				var $elem = $(elem);
				var $root = $elem.parents('.pignose_tab_wrap:last').addClass('pignose_tab_wrap_root');
				var $ul   = $elem.children('ul').addClass('pignose_tab_group');
				var $li   = $ul.children('li').addClass('pignose_tab_list');
				var $btn  = $li.children('a:not(".pignose_tab_more")').addClass('pignose_tab_btn');
				var $more = $li.children('a.pignose_tab_more');
				var $con  = $li.children('div').addClass('pignose_tab_con');
				
				if($root.length < 1) $root = $elem.addClass('pignose_tab_wrap_root');

				if($con.children('.pignose_tab_wrap').length > 0) {
					_this.rendering($con.children('.pignose_tab_wrap'));
				}

				if($elem.hasClass('pignose_tab_responsive_btn'))
				{
					$(window).bind('resize', function() {
						var margin = 0;

						if($more.length)
						{
							margin = ($elem.width() - ($more.innerWidth(true) + $more.offset().left));
						}

						$btn.each(function() {
							$(this).outerWidth(parseInt(($elem.width() - margin) / $btn.length));
							$(this).parent().width($(this).outerWidth(true));
						});
					});
				}
				
				if($li.filter('.active').length < 1) $li.eq(0).addClass('active');
				$li.filter('.active').children('.pignose_tab_btn, .pignose_tab_con').addClass('active');
				$li.filter(':last').children('.pignose_tab_btn').addClass('last_btn');

				$btn.bind('click', function(event) {
					if(!$(this).hasClass('active'))
					{
						$li.removeClass('active').children('.pignose_tab_btn, .pignose_tab_con').removeClass('active');
						$(this).parent().addClass('active').children('.pignose_tab_btn, .pignose_tab_con').addClass('active');
						_this.resizeTab($root);
						$(window).trigger('resize');

						if(_this.settings.callback != null && typeof _this.settings === 'function') {
							_this.settings.callback();
						}
					}
					event.preventDefault();
				});

				if(typeof flag !== 'undefined') {
					_this.resizeTab($elem, 'initialization');
					$(window).trigger('resize');
					$(window).bind('load', function() { $(this).trigger('resize'); });
				}
			});
			return root;
		};

		this.resizeTab = function(elem, idx, type) {
			var renderingHeight;
			var renderingType       = type;
			var $elem               = elem;
			var $activeTabContent   = $elem.filter('.active');
			var $nearTabContent     = $elem.find('.pignose_tab_group').eq(0).find('> .pignose_tab_list.active > .pignose_tab_con');
			var $siblingsTabContent = $elem.siblings('.pignose_tab_con')
			var $childrenTabContent = $elem.find('.pignose_tab_wrap').eq(0).find('> .pignose_tab_group > .pignose_tab_list.active > .pignose_tab_con');

			if(typeof idx == 'undefined') idx = 0;
			if(typeof idx == 'string' && idx == 'initialization') { renderingType = 'quick'; idx = 0; }
			if(typeof $elem === 'undefined' || $elem.length < 1) return false;

			if($elem.is('.pignose_tab_con') === false) {
				if($nearTabContent.length > 0) {
					_this.resizeTab($nearTabContent, idx, renderingType);
				} else {
					_this.resizeTab($siblingsTabContent, idx, renderingType);
				}
				return false;
			}

			if($childrenTabContent.length > 0) {
				renderingHeight = _this.resizeTab($childrenTabContent, idx + 1, renderingType);
			}

			if($activeTabContent.length > 0) {
				if(renderingHeight == null || renderingHeight <= 0) renderingHeight = parseInt($activeTabContent.outerHeight());
				if(typeof _this.settings.animation === 'undefined' ||
				   !!_this.settings.animation      === false       ||
				   _this.settings.animation        ==  'static'    ||
				   renderingType                   ==  'quick'
				) {
					$activeTabContent.parents('.pignose_tab_wrap').eq(0).height(parseInt($activeTabContent.position().top) + parseInt($activeTabContent.outerHeight()));
				}
				else {
					$activeTabContent.parents('.pignose_tab_wrap').eq(0)
					.stop()
					.animate(
						{
							'height' : (parseInt($activeTabContent.position().top) + renderingHeight) + 'px'
						},
						_this.settings.animationTime,
						(typeof window[_this.settings.animationEasing] !== 'undefined'? _this.settings.animationEasing:null)
					);
				}
				renderingHeight += parseInt($activeTabContent.position().top);
			}

			return renderingHeight;
		};

		return _this.rendering(this, true);
	};
})(jQuery)