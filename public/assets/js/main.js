(function ($)
  { "use strict"

  // Substitui a faixa repetida de logos por uma imagem pertinente nas páginas de condomínios.
  // Este bloco fica no início para não depender da execução dos plugins legados do tema.
  var condominiumPageImages = {
    ac1: { hero: 'assets/img/condominios/condominio_ar_condicionado.jpg', image: 'assets/img/condominios/condominio_ar_condicionado.jpg', alt: 'Condomínio residencial com equipamentos de ar-condicionado' },
    ve1: { hero: 'assets/img/condominios/condominio_carregadores.jpg', image: 'assets/img/condominios/condominio_carregadores.jpg', alt: 'Carregadores de veículos elétricos em garagem de condomínio' },
    cj1: { hero: 'assets/img/condominios/condominio_estudo_cargas.jpg', image: 'assets/img/condominios/condominio_estudo_cargas.jpg', alt: 'Engenheiro avaliando cargas elétricas em um condomínio' },
    la1: { hero: 'assets/img/hero/spda-raio-predio-v1.png', image: 'assets/img/hero/spda-raio-predio-v1.png', alt: 'Sistema de para-raios em edifício residencial durante uma tempestade' },
    pr1: { hero: 'assets/img/condominios/condominio_projeto_spda.jpg', image: 'assets/img/condominios/condominio_projeto_spda.jpg', alt: 'Projeto de SPDA para edifício residencial' },
    in1: { hero: 'assets/img/condominios/condominio_instalacao_spda.jpg', image: 'assets/img/condominios/condominio_instalacao_spda.jpg', alt: 'Instalação de SPDA em cobertura de condomínio' },
    ad1: { hero: 'assets/img/condominios/condominio_adequacao_spda.jpg', image: 'assets/img/condominios/condominio_adequacao_spda.jpg', alt: 'Adequação do SPDA em condomínio' },
    ca1: { hero: 'assets/img/condominios/condominio_continuidade_armaduras.jpg', image: 'assets/img/condominios/condominio_continuidade_armaduras.jpg', alt: 'Medição de continuidade de armaduras em estrutura de concreto' },
    pe1: { hero: 'assets/img/condominios/condominio_pericia_eletrica.jpg', image: 'assets/img/condominios/condominio_pericia_eletrica.jpg', alt: 'Perícia elétrica em quadro de distribuição de condomínio' }
  };
  var condominiumPageImage = Object.keys(condominiumPageImages).find(function (id) { return document.getElementById(id); });
  if (condominiumPageImage) {
    var heroArea = document.querySelector('.slider-area13');
    var imageData = condominiumPageImages[condominiumPageImage];
    if (heroArea) {
      heroArea.style.backgroundImage = 'url("' + imageData.hero + '")';
      heroArea.style.backgroundPosition = 'center center';
    }
    var serviceImage = document.querySelector('.service-image img');
    if (serviceImage) {
      serviceImage.src = imageData.image;
      serviceImage.alt = imageData.alt;
    }
    var brandArea = document.querySelector('.brand-area');
    var brandActive = brandArea && brandArea.querySelector('.brand-active');
    if (brandActive) {
      brandActive.innerHTML = '<img class="img-fluid w-100" style="max-height:250px;object-fit:cover;" src="' + imageData.image + '" alt="' + imageData.alt + '">';
      brandActive.classList.remove('brand-border');
    }
    var brandTitle = brandArea && brandArea.querySelector('h4');
    if (brandTitle) brandTitle.textContent = 'Imagem relacionada ao serviço';
  }
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });
  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

    
/* 2.1 Header and Footer Loader */
    function loadHeader() {
      $("#header-bottom").load("cabecalho.html?v=20261104-menu23");
      $("#footer-bottom").load("rodape.html?v=20261104-menu23");
    }

  // Expande as categorias do menu de serviços no desktop.
  // No menu móvel, o SlickNav mantém o comportamento próprio de submenus.
  function bindServiceMenuToggles() {
    $(document).off('click.serviceMenuRoot', '.services-menu-toggle');
    $(document).on('click.serviceMenuRoot', '.services-menu-toggle', function (event) {
      if ($(this).closest('.slicknav_nav').length) return;
      event.preventDefault();
      var toggle = $(this);
      var root = toggle.closest('.services-root');
      var isOpen = root.hasClass('is-open');
      $('.services-root.is-open').not(root).removeClass('is-open').children('.services-menu-toggle').attr('aria-expanded', 'false');
      root.toggleClass('is-open', !isOpen);
      toggle.attr('aria-expanded', String(!isOpen));
      if (isOpen) {
        root.find('.service-audience.is-open').removeClass('is-open').children('.service-audience-toggle').attr('aria-expanded', 'false');
      }
    });
    $(document).off('click.serviceMenu', '.service-category-toggle');
    $(document).on('click.serviceMenu', '.service-category-toggle', function (event) {
      if ($(this).closest('.slicknav_nav').length) return;
      event.preventDefault();
      var toggle = $(this);
      var group = toggle.closest('.service-group');
      var isOpen = group.hasClass('is-open');
      $('.service-group.is-open').not(group).removeClass('is-open').children('.service-category-toggle').attr('aria-expanded', 'false');
      group.toggleClass('is-open', !isOpen);
      toggle.attr('aria-expanded', String(!isOpen));
    });
    $(document).off('click.serviceAudience', '.service-audience-toggle');
    $(document).on('click.serviceAudience', '.service-audience-toggle', function (event) {
      if ($(this).closest('.slicknav_nav').length) return;
      event.preventDefault();
      var toggle = $(this);
      var audience = toggle.closest('.service-audience');
      var category = audience.closest('.service-group');
      var isOpen = audience.hasClass('is-open');
      category.find('.service-audience.is-open').not(audience).removeClass('is-open').children('.service-audience-toggle').attr('aria-expanded', 'false');
      audience.toggleClass('is-open', !isOpen);
      toggle.attr('aria-expanded', String(!isOpen));
    });
  }

    $.when( loadHeader() ).done(function() {
      const myTimeout = setTimeout(slickNavMobileMenu, 500);
      slickNavMobileMenu();
      bindServiceMenuToggles();
    });

/* 3. slick Nav */
// mobile_menu
  function slickNavMobileMenu() {
    var menu = $('ul#navigation');
      if(menu.length){
        menu.slicknav({
          prependTo: ".mobile_menu",
          closedSymbol: '+',
          openedSymbol:'-',
          beforeOpen: function () {
            $('body').addClass('mobile-nav-open');
          },
          afterClose: function () {
            $('body').removeClass('mobile-nav-open');
          }
        });
      };
  }
  slickNavMobileMenu();

/* 3. MainSlider-1 */
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
          var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
          var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
          doAnimations($animatingElements);
        });
        BasicSlider.slick({
          autoplay: true,
          autoplaySpeed: 4500,
          dots: false,
          fade: true,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"><i class="ti-arrow-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="ti-arrow-right"></i></button>',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
        });

        function doAnimations(elements) {
          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
              'animation-delay': $animationDelay,
              '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
              $this.removeClass($animationType);
            });
          });
        }
      }
      mainSlider();


 // Client logo carousels
    $('.brand-active').each(function () {
      var $carousel = $(this);
      var $slides = $carousel.children('.single-brand');

      // Some condominium pages intentionally replace this area with one
      // contextual image. Keep that image unchanged.
      if (!$slides.length) return;

      $carousel.removeClass('brand-active brand-border pb-60').addClass('index-client-logos');
      var $track = $('<div class="index-client-logos-track"></div>');
      var $duplicates = $slides.clone();
      $duplicates.attr('aria-hidden', 'true').find('img').attr('alt', '');
      $track.append($slides).append($duplicates);
      $carousel.empty().append($track);
    });

/* 4. Testimonial Active*/
  var testimonial = $('.h1-testimonial-active');
      if(testimonial.length){
      testimonial.slick({
          dots: false,
          infinite: true,
          speed: 1000,
          autoplay:false,
          loop:true,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrow:false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
              }
            }
          ]
        });
      }


/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();


    
// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();



// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }

/*13. magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });



/* 14. counterUp*/
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });



})(jQuery);
