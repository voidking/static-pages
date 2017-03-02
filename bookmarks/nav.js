+(function($) {
	$('#navs a').attr('target', '_blank')
	var title = '<li>'+$('#navs h2').map(function(){ return $(this).html() }).get().join('</li><li>')+'</li>'
	$('.navs-speed li').each(function(e){
		$(this).click(function(){
			$(this).addClass('active').siblings().removeClass()
            $('html,body').animate({scrollTop: $('#navs h2:eq('+$(this).index()+')').offset().top-10}, 300)
            $('#navs .item:eq('+$(this).index()+')').parent().parent().find('.item.active').removeClass('active')
            $('#navs .item:eq('+$(this).index()+')').addClass('active')
		})
	})
})(window.jQuery);