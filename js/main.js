$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('scrolledHeader')
        } else {
            $('#header').removeClass('scrolledHeader')
        }
    });


        //   Smooth scrolling effect

        var scrolltoOffset = $('#header').outerHeight() - 25;
        if (window.matchMedia("(max-width: 991px)").matches) {
          scrolltoOffset += 25;
        }
        $(document).on('click', '.navbar a, .button, .dropdown-item, #scrollTop', function(e) {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {
      
              var scrollto = target.offset().top - scrolltoOffset;
      
              if ($(this).attr("href") == '#header') {
                scrollto = 0;
              }
      
              $('html, body').animate({
                scrollTop: scrollto
              }, 1500, 'easeInOutExpo');
              return false;
            }
          }
        });
    
    // Activate smooth scroll in all browsers

    $(document).ready(function() {
        if (window.location.hash) {
          var initial_nav = window.location.hash;
          if ($(initial_nav).length) {
            var scrollto = $(initial_nav).offset().top - scrolltoOffset;
            $('html, body').animate({
              scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
          }
        }
      });
  
  
    var nav_sections = $('section');
    var main_nav = $('.navbar');
  
    $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop() + 100;
  
      nav_sections.each(function() {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
          $(".navbar ul:first li:first").addClass('active');
        }
      });
    });
  

    // click to add active effect and remove

    $('.navbar .nav-link').on('click', function () {
        $('.navbar').find('.nav-item.active').removeClass('active');
        $(this).parents('.nav-item').addClass('active')
    })

    // Portfolio control active class

    $(document).on('click', '.portfolio-control li', function () {
        $('li').removeClass('active')
        $(this).addClass('active')
    })
    // Toggler icon

    $(document).ready(function () {
        $('.hum-wrap').click(function () {
            $(this).toggleClass('active')
        })
    })

    // Venobox slider

    $(document).ready(function() {
        $('.venobox').venobox();
    });

    // Scroll top icon 

        
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scrollTop').fadeIn(500)
        } else {
            $('#scrollTop').fadeOut(500)
        }
    });

    
    $('.icon-prb').click(function () {
        $(this).toggleClass('icon-active')
    });

});

$(function(){

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });

    // Activate progress animation on scroll
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');

});

console.log()
    
// Isotope jquery slider

$(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
    });

    $('.portfolio-control li').on('click', function() {
    portfolioIsotope.isotope({
        filter: $(this).data('filter')
    });
    aos_init();
    });

});
