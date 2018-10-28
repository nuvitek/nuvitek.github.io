$(document).ready(function() {

  $.localScroll({
                lazy: true,
                offset: {
                    top: - ($('.nuvihead').height())
                }
            });

  $("a.casestudy").pageslide({ direction: "left", modal: true, iframe: false, speed: "250" });
  $("a.servicepage").pageslide({ direction: "left", modal: true, iframe: false, speed: "250" });

});

	/* Navigation Fix
	-----------------------------------------------------*/
	
	 $(function() {
       $('a[href*="#"]:not([href="#"])').click(function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html, body').animate({
               scrollTop: target.offset().top
             }, 1000);
             return false;
           }
         }
       });
     });
