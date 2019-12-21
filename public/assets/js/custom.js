$(document).ready(function () {
    // Fixed navbar effect
    $(window).scroll(function () { 
        var scrollPos = $(document).scrollTop();
        if($(window).width() > 992){
            scrollPos > 200 ? $('header').addClass('fixed-header') : $('header').removeClass('fixed-header');
        }
    });
    if($(window).width() > 992){
        $("#collapse-main-manual").click(function(){
            setTimeout(() => {
                if($(this)[0].getAttribute('aria-expanded')=='false'){ 
                    if($('.check-active').hasClass('show')){
                        $('.check-active').removeClass('show');
                    }

                } else {
                    
                    if(!$(".collapse.default-active").hasClass('show')){
                        $(".collapse.default-active").addClass('show');
                    }
                }
            }, 1000);
           
       });
    
    }
   
});