/************************************************************************************************************
 *
 * @ Version 3.1.0
 * @ PIGNOSE Tab
 * @ Date 11. 05. 2016
 * @ Author PIGNOSE
 * @ Licensed under MIT.
 *
 ***********************************************************************************************************/

(function($) {
	$.fn.pignoseTab = function(options) {
		var _this    = this;

		this.settings = $.extend({
			'callback'        : null,
			'animation'       : 'static',
			'animationTime'   : 300,
			'animationEasing' : 'easeInOutCubic',
			'children'        : '.sub-tab'
		}, options);

		this.rendering = function(root, flag) {
			root.each(function(idx, elem) {
				if(typeof elem === 'undefined' || elem.length < 1) return;
				var $elem = $(elem).addClass('pignose-tab-wrapper');
				var $root = $elem.parents('.pignose-tab-wrapper:last').addClass('pignose-tab-wrapper-root');
				var $ul   = $elem.children('ul').addClass('pignose-tab-group');
				var $li   = $ul.children('li').addClass('pignose-tab-list');
				var $btn  = $li.children('a:not(".pignose-tab-more")').addClass('pignose-tab-btn');
				var $more = $li.children('a.pignose-tab-more');
				var $con  = $li.children('div').addClass('pignose-tab-container');
				
				if($root.length < 1) $root = $elem.addClass('pignose-tab-wrapper-root');
				if($con.children(_this.settings.children).length > 0) {
					_this.rendering($con.children(_this.settings.children).addClass('pignose-sub-tab').parent().addClass('pignose-sub-tab-wrapper'));
				}

				if($elem.hasClass('pignose-tab-responsive-btn'))
				{
					$(window).bind('resize', function() {
						var margin = 0;

						if($more.length)
						{
							margin = ($elem.width() - ($more.innerWidth(true) + $more.offset().left));
						}

						$btn.each(function() {
							$(this).outerWidth(parseFloat(($elem.width() - margin) / $btn.length));
							$(this).parent().width($(this).outerWidth(true));
						});
					});
				}
				
				if($li.filter('.active').length < 1) $li.eq(0).addClass('active');
				$li.filter(':last').children('.pignose-tab-btn').addClass('last-btn');

				$btn.bind('click', function(event) {
					if(!$(this).hasClass('active'))
					{
						$li.removeClass('active').children('.pignose-tab-btn, .pignose-tab-container').removeClass('active');
						$(this).parent().addClass('active').children('.pignose-tab-btn, .pignose-tab-container').addClass('active');
						_this.resizeTab($root);
						$(window).triggerHandler('resize');

						if(_this.settings.callback != null && typeof _this.settings === 'function') {
							_this.settings.callback();
						}
					}
					event.preventDefault();
				});
				$li.filter('.active').find('.pignose-tab-btn').triggerHandler('click');

				if(typeof flag !== 'undefined') {
					_this.resizeTab($elem, 'initialization');
					$(window).triggerHandler('resize');
					$(window).bind('load', function() { $(this).triggerHandler('resize'); });
				}
			});
			return root;
		};

		this.resizeTab = function(elem, idx, type) {
			var renderingHeight;
			var renderingType       = type;
			var $elem               = elem;
			var $activeTabContent   = $elem.filter('.active');
			var $nearTabContent     = $elem.find('.pignose-tab-group').eq(0).find('> .pignose-tab-list.active > .pignose-tab-container');
			var $siblingsTabContent = $elem.siblings('.pignose-tab-container')
			var $childrenTabContent = $elem.find(_this.settings.children).eq(0).find('> .pignose-tab-group > .pignose-tab-list.active > .pignose-tab-container');

			if(typeof idx == 'undefined') idx = 0;
			if(typeof idx == 'string' && idx == 'initialization') { renderingType = 'quick'; idx = 0; }
			if(typeof $elem === 'undefined' || $elem.length < 1) return false;

			if($elem.is('.pignose-tab-container') === false) {
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
				var $wrapper = $activeTabContent.closest(_this.settings.children);
				if(renderingHeight == null || renderingHeight <= 0) {
					renderingHeight = $activeTabContent.outerHeight() + $activeTabContent.position().top + parseFloat($wrapper.css('padding-top').replace('px', '')) + parseFloat($wrapper.css('padding-bottom').replace('px', '')) + 2;
				} else {
					renderingHeight +=  $activeTabContent.position().top + 2;
				}
				if(typeof _this.settings.animation === 'undefined' ||
				   !!_this.settings.animation      === false       ||
				   _this.settings.animation        ==  'static'    ||
				   renderingType                   ==  'quick'
				) {
					$wrapper.height(renderingHeight);
				}
				else {
					$wrapper
					.stop()
					.animate(
						{
							'height' : renderingHeight + 'px'
						},
						_this.settings.animationTime,
						(typeof window[_this.settings.animationEasing] !== 'undefined'? _this.settings.animationEasing:null)
					);
				}
			}

			return renderingHeight;
		};

		return _this.rendering(this, true);
	};
})(jQuery)