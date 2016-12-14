$(document).ready(function() {
      $('.all-tabs .class-click').on('click', function(){
        var panelTerdekat = $(this).closest('.all-tabs')
        console.log(panelTerdekat)
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

          if(wScroll > $('.project-tab-wrapper').offset().top){
             $('#back-top').addClass('back-top-invis');
          }
          else{
            $('#back-top').removeClass('back-top-invis');
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
			 	            scrollTop: target.offset().top - 80
			 	        }, duration);
			 	    }
			 	});
			 }
    })