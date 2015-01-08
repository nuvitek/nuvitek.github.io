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


