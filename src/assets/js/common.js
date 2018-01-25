/**
 * Created by 94216 on 2017/12/15.
 */
$(function () {
	header.init("#header");
	$('.carousel').carousel();
	$(window).scroll(function () {
		header.init("#header","setWidth");
	});

	$(".wxcode").click(function () {
		$(".fixed-code__wx").addClass("show");
	});
	$(".fixed-code__wx .fixed-container").click(function () {
		event.stopPropagation();
	});
	$(".fixed-code__wx").on("click",function () {
		$(this).removeClass("show");
	})

});

var header = (function () {
	var Header = function (el,option) {
		this.$el = $(el);
		this.$nav = this.$el.find(".nav-wrap");
		this.$logo = this.$el.find(".daye-logo");
		this.isHover = false;
	};
	Header.prototype = {
		init: function () {
			this.setWidth();
			this.bindEvent();
		},
		setWidth: function () {
			if($(document).scrollTop()>80){
				this.$el.width(this.$logo.width());
			}else {
				this.$el.width(this.$logo.width()+this.$nav.width());
			}
		},
		bindEvent: function () {
			var self = this;
			self.$el.on('mouseover',function () {
				self.isHover = true;
				self.$el.width(self.$logo.width()+self.$nav.width());
			}).on('mouseout',function () {
				self.isHover = false;
				setTimeout(function () {
					if (!self.isHover && $(document).scrollTop()>80) {
						self.$el.width(self.$logo.width());
					}
				},700)
			})
		}
	}
	var init = function (el,option) {
		var $el = $(el);
		$el.each(function () {
			var header = $(this).data('header');
			if(!header){
				$(this).data('header', (header = new Header(this, typeof option === 'object' && option)));
				header.init();
			}
			if (typeof option === 'string') header[option]();
		});

	};
	return {
		init: init
	}
})();