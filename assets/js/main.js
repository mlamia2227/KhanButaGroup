const navShow = () => {
	const navBar = document.querySelector('.nav-bar');
	const menuList = document.querySelector('.mobile-menu');

	navBar.addEventListener('click', () => {
		menuList.classList.toggle('nav-active');

		navBar.classList.toggle('close');
   
	});


}
navShow();

$(document).ready(function () {

  $('.nav-bar').click(function () {
    $('.overlay-color').addClass('open');
    
  })

    $('.nav-bar').click(function () {
    $('.overlay-color').removeClass('open');
    console.log("open")
    
  })
})

$(document).ready(function () {
  $('.nav-item a').click(function () {
    $('.nav-item a').removeClass("activ");
    $(this).addClass("activ");
  });
});




$(document).ready(function () {
  $(".image-hover").hover(function () {
    $(".image-hover").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $('.language a').click(function () {
    $('.language a').removeClass("active");
    $(this).addClass("active");
  });
});


(function ($) {
  $.fn.loading = function () {
    var DEFAULTS = {
      backgroundColor: '#ccc',
      progressColor: '#4b86db',
      percent: 75,
      duration: 2000
    };

    $(this).each(function () {
      var $target = $(this);

      var opts = {
        backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
        progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
        percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
        duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
      };
      // console.log(opts);

      $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');

      $target.find('.background').css('background-color', opts.backgroundColor);
      $target.find('.left').css('background-color', opts.backgroundColor);
      $target.find('.rotate').css('background-color', opts.progressColor);
      $target.find('.right').css('background-color', opts.progressColor);

      var $rotate = $target.find('.rotate');
      setTimeout(function () {
        $rotate.css({
          'transition': 'transform ' + opts.duration + 'ms linear',
          'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
        });
      }, 1);

      if (opts.percent > 50) {
        var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
        var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
        $target.find('.right').css({
          animation: animationRight,
          opacity: 1
        });
        $target.find('.left').css({
          animation: animationLeft,
          opacity: 0
        });
      }
    });
  }
})(jQuery);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
  	0: {
			slidesPerView: 1,
		},
		375: {
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
  },
});




