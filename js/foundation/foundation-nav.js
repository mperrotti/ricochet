/**
 * NAV
 * Top-level navigation
 * Currently, tabs
 * Could be easily repurposed for side menu
 * Search mode needs work.
 */

var Nav = function(){
	this.$el = null;
	this.current_view = null;
	this.open = false;
	this.init();
}

Nav.prototype = {
	show: function(){
		this.$el.show();
		$('body').addClass('has-nav');
		this.showing = true;
	},

	hide: function(){
		this.$el.hide();
		$('body').removeClass('has-nav');
		this.showing = false;
	},

	init: function(){
		this.$el = $('<div id="nav"></div>').appendTo('body');

		this.current_view = new Components.Nav( {
			el: '#nav',
			//data: this.header_data,
			magic: true,
			noIntro: true,
		});
		this.$el.find('.tabs').tabs();
	}


};