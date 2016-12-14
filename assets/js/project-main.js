$(document).ready(function() {
      $('.all-tabs .class-click').on('click', function(){
        var panelTerdekat = $(this).closest('.all-tabs')
        panelTerdekat.find('.tab-active').removeClass('tab-active');
        $(this).addClass('tab-active');
        var panel = $(this).attr('data-panelid');
        panelTerdekat.find('.class-display.display-active').fadeOut(300 , function(){
          $(this).removeClass('display-active')
            $('#'+panel).fadeIn(300,function(){
            $(this).addClass('display-active');
          });
        });
      })
     
      $(window).scroll(function(){
      		var wScroll = $(this).scrollTop();


          if(wScroll > $('.project-wrapper').offset().top){
             $('#back-top').addClass('back-top-invis');
             console.log('wew')
          }
          else{
            $('#back-top').removeClass('back-top-invis');
          }

          

      		if(wScroll > ($('.header').height()-68)){
      			$('.navbar').removeClass('header-not-active');
      		}
      		else{
      			$('.navbar').addClass('header-not-active');
      		}

      		if(wScroll >= ($('#main-about').offset().top - 80) &&  wScroll < ($('#main-class').offset().top - 80)){
      			$('.navbar-left').children().eq(0).addClass('navbar-main-active');
      		}
      		else{
      			$('.navbar-left').children().eq(0).removeClass('navbar-main-active');
      		}
      		if(wScroll >= ($('#main-class').offset().top - 80) &&  wScroll < ($('#main-project').offset().top - 81)){
      			$('.navbar-left').children().eq(1).addClass('navbar-main-active');
      		}
      		else{
      			$('.navbar-left').children().eq(1).removeClass('navbar-main-active');
      		}
      		if(wScroll > ($('#main-class').offset().top + $('#main-class').height() + 70)  ){
      			$('.navbar-left').children().eq(2).addClass('navbar-main-active');
      		}
      		else{
      			$('.navbar-left').children().eq(2).removeClass('navbar-main-active');
      		}


      })

      $(function(){
				smoothScroll(500);
			});
			function smoothScroll (duration) {
			 	$('a[href^=#main]').on('click', function(event) {
			 	    var target = $( $(this).attr('href') );
			 	    if( target.length ) {
			         event.preventDefault();
			 	        $('html, body').animate({
			 	            scrollTop: target.offset().top - 78
			 	        }, duration);
			 	    }
			 	});
			 }
    })