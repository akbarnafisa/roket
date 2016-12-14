$(document).ready(function() {

      $('.port-content').on('click', function(){
          var panel = $(this).attr('data-portid');
          $('.port-clicked').addClass('portactive');
          
          $('#'+panel).addClass('port-active');
          $("body").addClass('bodyhidden')

          $('.port-clicked').on('click', function(){
            $('.port-clicked').removeClass('portactive');
            $("body").removeClass('bodyhidden')
            $('#'+panel).removeClass('port-active');
        })
        
      })

       $(window).scroll(function(){
          var wScroll = $(this).scrollTop();

          if(wScroll > $('.user-header-wrapper').offset().top){
             $('#back-top').addClass('back-top-invis');
          }
          else{
            $('#back-top').removeClass('back-top-invis');
          }
      })

      $('.port-clicked').on('click', function(){
          $('.port-clicked').removeClass('portactive');
          $("body").removeClass('bodyhidden')
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