$(document).ready(function(){

	$('.site  > .body').css('margin-top', '0%');
	$('.site  > .body').hide('slide', {direction: 'left'}, 1000);
	$('.site  > .body').animate({"left":"-1000px"}, "slow").removeClass('visible');
	
	setInterval(function() { 
		$('#bg > div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#bg');
	},  3000);
	
	

	
	$('.switch-N').click(function(){$(this).next('.toggle').toggle();});
	$('.switch-P').click(function(){$(this).parent().next('.toggle').toggle();});
	$('.switch-C').click(function(){$(this).children('.toggle').toggle();});
	
	$('.switch-Ch').click(function(){$(this).children('.toggle').toggle();});
	
	$('.switch-Ns').click(function(){
		var sub = $(this).next('.toggle');
		if (sub.is(':visible')) sub.slideUp('normal'); else sub.slideDown('normal');
	});
	
	
});
