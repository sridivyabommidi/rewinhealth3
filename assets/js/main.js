(function ($) {
  "use strict";

  ///////////////////////////////////////////////////////
  // Preloader

  function template_preloader() {
    var preloader = $("#preloader");

    // Use window load event instead of document ready
    $(window).on("load", function () {
      setTimeout(function () {
        preloader.addClass("preloaded");
      }, 1000);
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    });
  }

  template_preloader();

  // Preloader End

  // Menu

  jQuery(document).ready(function () {
    jQuery("header .mainmenu").meanmenu({
      meanScreenWidth: "992",
    });
  });

  document
    .querySelectorAll(".menu-anim > li > a")
    .forEach(
      (button) =>
        (button.innerHTML =
          '<div class="menu-text"><span>' +
          button.textContent.split("").join("</span><span>") +
          "</span></div>")
    );

  setTimeout(() => {
    var menu_text = document.querySelectorAll(".menu-text span");
    menu_text.forEach((item) => {
      var font_sizes = window.getComputedStyle(item, null);
      let font_size = font_sizes.getPropertyValue("font-size");
      let size_in_number = parseInt(font_size.replace("px", ""));
      let new_size = parseInt(size_in_number / 3);
      new_size = new_size + "px";
      if (item.innerHTML == " ") {
        item.style.width = new_size;
      }
    });
  }, 1000);

  // Menu End

  ///////////////////////////////////////////////////////
  // Sticky Menu
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $(".menu-area").addClass("sticky");
    } else {
      $(".menu-area").removeClass("sticky");
    }
  });

  // Sticky Menu End

  ///////////////////////////////////////////////////////
  // Magnific Popup gallery
  $(".popup-gallery").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    gallery: {
      enabled: true,
    },
    type: "image",
    // other options
  });

  $(".popup-youtube").magnificPopup({
    type: "iframe",
  });

  // Magnific Popup gallery End

  /*Showcase Slide*/

  var showcaseSlider = new Swiper(".service-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    speed: 2500,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".service-button-next",
      prevEl: ".service-button-prev",
    },
  });

  /*Showcase Slide End*/

  /////////////////////////////////////////////////////

  /*Blog Slide*/

  var blogSlider = new Swiper(".blog-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    speed: 2500,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".blog-button-next",
      prevEl: ".blog-button-prev",
    },
  });

  /*Blog Slide End*/

  /////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////
  /*Swiper Brand Slide*/
  var brandSlider = new Swiper(".brand-carrousel", {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    speed: 2500,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });

  $(".brand-carrousel").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );

  /*Swiper Brand Slide End*/

  ///////////////////////////////////////////////////////
  // Cta Slider

  var cta_slider = new Swiper(".cta-slider", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 3000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });

  // Cta Slider End

  ///////////////////////////////////////////////////////
  // Blog Grid Slider

  var blog_grid_slider = new Swiper(".blog-grid-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    navigation: {
      nextEl: ".blog-grid-button-next",
      prevEl: ".blog-grid-button-prev",
    },
  });

  // Cta Slider End

  ///////////////////////////////////////////////////////
  /*Testimonial Slide*/

  var testimonialSlider = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    speed: 1500,
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
    },
  });

  /*Testimonial Slide End*/

  /*Testimonial Two Slide*/

  var testimonial_two_Slider = new Swiper(".testimonial-slider-two", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".testimonial-slider-two-next",
      prevEl: ".testimonial-slider-two-prev",
    },
    speed: 1000,
    breakpoints: {
      200: {
        pagination: {
          el: ".testimonial-pagination-two",
          clickable: true,
        },
      },
    },
  });

  /*Testimonial Two Slide End*/

  ///////////////////////////////////////////////////////
  /* Video Player hero */
  jQuery(window).on("load", function ($) {
    let player_hero = document.getElementById("player-video"),
      play_hero = document.getElementById("play-icon-wrap");

    play_hero &&
      play_hero.addEventListener("click", function () {
        if (player_hero.paused) {
          player_hero.play();
        } else if (!player_hero.paused) {
          player_hero.pause();
        }
      });
  });

  var pause_video = document.querySelector(".pause-icon");
  var play_video = document.querySelector(".play-icon");
  var btn_wrap = document.querySelector(".video-icon-wrap");

  btn_wrap &&
    btn_wrap.addEventListener("click", function () {
      if (play_video.classList.contains("active")) {
        play_video.classList.remove("active");
        pause_video.classList.add("active");
      } else {
        pause_video.classList.remove("active");
        play_video.classList.add("active");
      }
    });

  /* Video Player hero End */

  ///////////////////////////////////////////////////////
  // Contact Form Start

  // Get the form.
  var form = $("#contact-form");

  // Get the messages div.
  var formMessages = $(".form-message");

  // Set up an event listener for the contact form.
  $(form).on("submit", function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData,
    })
      .done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $("#contact-form input,#contact-form textarea").val("");
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occurred. Message could not be sent."
          );
        }
      });
  });
  // Contact Form End

  ///////////////////////////////////////////////////////
  // Bottom to top start
  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll-top").fadeIn();
      } else {
        $("#scroll-top").fadeOut();
      }
    });
    $("#scroll-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
  // Bottom to top End

  ///////////////////////////////////////////////////////
  // Odometer Counter
  $(".counter-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (
          var i = 0;
          i < document.querySelectorAll(".odometer").length;
          i++
        ) {
          var el = document.querySelectorAll(".odometer")[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });

  ///////////////////////////////////////////////////////

  // GSAP Title Animation

  // Hero Animation

  let mark = document.querySelector(" .title-left");
  let eting = document.querySelector(".title-right");
  let hero__text_animation = document.querySelector(".hero__text-animation");
  let HomeDigital = gsap.timeline();

  let split_creatives = new SplitText(mark, { type: "chars" });
  let split_solutions = new SplitText(eting, { type: "chars" });
  let split_text_animation = new SplitText(hero__text_animation, {
    type: "chars words",
  });

  HomeDigital.from(split_creatives.chars, {
    duration: 0.5,
    x: 100,
    autoAlpha: 0,
    stagger: 0.2,
  });
  HomeDigital.from(
    split_solutions.chars,
    { duration: 2, x: 100, autoAlpha: 0, stagger: 0.1 },
    "-=1"
  );
  HomeDigital.from(
    split_text_animation.words,
    { duration: 1, x: 10, autoAlpha: 0, stagger: 0.1 },
    "-=1"
  );

  // Style 1
  let animation_down = gsap.timeline();

  animation_down.from(
    ".animation-down",
    {
      duration: 4,
      x: 300,
      autoAlpha: 0,
      ease: "elastic.out(1, 1)",
      stagger: {
        each: 0.75,
        amount: 0.5,
      },
    },
    "+=0.25"
  );

  // Style 2
  let word_come_long = document.querySelectorAll(".animation-word");
  word_come_long.forEach((word_come_long) => {
    let split_word_come_long = new SplitText(word_come_long, {
      type: "chars words",
      position: "absolute",
    });
    gsap.from(split_word_come_long.words, {
      duration: 2,
      x: 100,
      autoAlpha: 0,
      stagger: 0.2,
    });
  });

  // Hero Animation End

  // Style 3

  let zoom_item_r = gsap.utils.toArray(".zoom_item_single");

  zoom_item_r.forEach((zoom_item, i) => {
    gsap.set(zoom_item, { opacity: 0, y: 30, scale: 0.5 });

    let zoom_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: zoom_item,
        start: "top center+=200",
        markers: false,
      },
    });

    zoom_timeline.to(zoom_item, {
      y: 0,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
        delay: 0.5, // add a 0.5 second delay between each item animation
      },
    });
  });

  // Style 4 Zoom out

  let splitTitleLines = gsap.utils.toArray(".title-anim");

  splitTitleLines.forEach((splitTextLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" });
    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });

  ///////////////////////////////////////////////////////
  // GSAP Register

  window.gsap.registerPlugin(
    window.ScrollTrigger,
    window.ScrollSmoother,
    window.TweenMax
  );

  /////////

  /////////////////////////////////////////////////////
  // Magnate Animation
  var magnets = document.querySelectorAll(".magnetic-hover");
  var strength = 50;

  magnets.forEach((magnet) => {
    magnet.addEventListener("mousemove", moveMagnet);
    magnet.addEventListener("mouseout", function (event) {
      TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
    });
  });

  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();

    //console.log(magnetButton, bounding)

    TweenMax.to(magnetButton, 1, {
      x:
        ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
        strength,
      y:
        ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
        strength,
      ease: Power4.easeOut,
    });
  }

  // Magnate Animation End

  /////////////////////////////////////////////////////
  //  Animation Fade Left

  const fadeElements = document.querySelectorAll(".fade_left");

  fadeElements.forEach((element, index) => {
    gsap.set(element, { x: -50, opacity: 0 });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top center+=300",
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
        from: index * 0.2, // stagger delay based on element index
      },
    });
  });

  // Button Hover Animation
  $(".btn-hover").on("mouseenter", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find("span").css({
      top: y,
      left: x,
    });
  });

  $(".btn-hover").on("mouseout", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find("span").css({
      top: y,
      left: x,
    });
  });
  /////////////////////////////////////////////////////

  // 19. Button Move Animation
  const all_btns = gsap.utils.toArray(".btn_wrapper");
  if (all_btns.length > 0) {
    var all_btn = gsap.utils.toArray(".btn_wrapper");
  } else {
    var all_btn = gsap.utils.toArray("#btn_wrapper");
  }
  const all_btn_cirlce = gsap.utils.toArray(".btn-item");
  all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, all_btn_cirlce[i], 80);
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.5, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(all_btn_cirlce[i], 0.5, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });

  // Project horizontal Slider
  var hp_slider_wrapper = document.querySelector(".horizontal-project-sliders");

  if (hp_slider_wrapper != null) {
    window.runGlobalAnimation = function () {
      let device_width = window.innerWidth;

      if (device_width > 992) {
        gsap.registerPlugin(ScrollTrigger);
        let sections = gsap.utils.toArray(".project-slide");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-project-sliders",
            pin: ".main-project-wrap",
            scrub: 1.2,
            end: "+=2000",
            start: "center center",
            end: () => "+=" + hp_slider_wrapper.offsetWidth,
          },
        });
      }
    };
    runGlobalAnimation();
  }

  // Project horizontal Slider End

  // Image
  const imageRevel = gsap.timeline({ defaults: { ease: "power__2" } });

  gsap.to(".image-scale-anim", {
    scrollTrigger: ".image-scale-anim",
    scaleX: 1,
    x: 0,
    opacity: 1,
    delay: 0.6,
    ease: "power__2",
    duration: 1.5,
  });

  // Star animation
  gsap.to(".star-1", {
    duration: 1,
    y: 0,
    rotation: 180,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".star-1",
      markers: false,
      start: "top center",
      end: "top 100px",
      // toggleActions: "play complete pause reverse"
      scrub: 1,
    },
  });

  gsap.to(".star-2", {
    duration: 1,
    x: 0 * 1,
    rotation: 180,
    opacity: 1,
    ease: "linear",
    scrollTrigger: {
      trigger: ".star-2",
      markers: false,
      start: "top center",
      end: "top 200px",
      // toggleActions: "play complete pause reverse"
      scrub: 1,
    },
  });

  gsap.to(".star-3", {
    duration: 1.1,
    y: 0,
    rotation: -180,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".star-3",
      markers: false,
      start: "top center",
      end: "top 100px",
      // toggleActions: "play complete pause reverse"
      scrub: 1,
    },
  });

  gsap.to(".star-4", {
    duration: 1.2,
    y: 0,
    rotation: 180,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".star-4",
      markers: false,
      start: "top center",
      end: "top 100px",
      // toggleActions: "play complete pause reverse"
      scrub: 1,
    },
  });

  gsap.to(".test-star-1", {
    duration: 1,
    x: 0,
    rotation: -360,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".test-star-1",
      markers: false,
      start: "top center",
      end: "top 100px",
      // toggleActions: "play complete pause reverse"
      scrub: 1,
    },
  });

  gsap.to(".test-star-2", {
    duration: 1,
    x: innerWidth * 1,
    rotation: -360,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".test-star-2",
      markers: false,
      start: "top center",
      end: "top 100px",
      // toggleActions: "play complete pause reverse"
      scrub: 1,
    },
  });

  gsap.to(".test-star-3", {
    duration: 0.1,
    x: 0,
    rotation: -360,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".test-star-3",
      markers: false,
      start: "top center",
      end: "top 100px",
      // toggleActions: "play complete pause reverse"
      scrub: 1,
    },
  });

  // Star animation End

  // Custom Cursor

  window.onload = function () {
    const cursor = document.querySelector(".cursor");
    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    };
    window.addEventListener("mousemove", editCursor);

    $("a, .cursor-pointer").hover(
      function () {
        $(".cursor").addClass("cursor-active");
      },
      function () {
        $(".cursor").removeClass("cursor-active");
      }
    );
  };

  // Custom Cursor End
})(jQuery);
