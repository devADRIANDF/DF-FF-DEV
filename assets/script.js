(function ($) {
  "use strict";

  /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/
  $(".select").niceSelect();

  $("body").on("click", function () {
    $(".navigation-holder").removeClass("slideInn");
  });
  $(".menu-close").on("click", function () {
    $(".navigation-holder").removeClass("slideInn");
  });
  $(".menu-close").on("click", function () {
    $(".open-btn").removeClass("x-close");
  });

  //Setting hero slider
  function heroSlider() {
    if ($(".hero-slide-wrap").length) {
      $(".hero-slide-wrap").slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        dots: true,
        cssEase: "linear",
      });
    }
  }

  //Active heor slider
  heroSlider();

  /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
  function preloader() {
    if ($(".preloader").length) {
      $(".preloader")
        .delay(100)
        .fadeOut(500, function () {
          //active wow
          wow.init();
        });
    }
  }

  $(document).ready(function () {
    $(".open-btn").on("click", function () {
      $(".mobail-menu-area").addClass("show-mobail-menu");
    });

    $(".close-btn").on("click", function () {
      $(".mobail-menu-area").removeClass("show-mobail-menu");
    });
  });

  /*------------------------------------------
            = Header search toggle
        -------------------------------------------*/
  if ($(".header-search-form-wrapper").length) {
    var searchToggleBtn = $(".search-toggle-btn");
    var searchContent = $(".header-search-form");
    var searchClose = $(".search-close");
    var body = $("body");

    searchToggleBtn.on("click", function (e) {
      searchContent.toggleClass("header-search-content-toggle");
      body.addClass("overflow-hidden overlay");
      e.stopPropagation();
    });
    searchClose.on("click", function (e) {
      searchContent.removeClass("header-search-content-toggle");
      body.removeClass("overflow-hidden overlay");
      e.stopPropagation();
    });

    body
      .on("click", function () {
        searchContent.removeClass("header-search-content-toggle");
        body.removeClass("overflow-hidden overlay");
      })
      .find(searchContent)
      .on("click", function (e) {
        e.stopPropagation();
      });
  }

  /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/
  if ($(".mini-cart").length) {
    var cartToggleBtn = $(".cart-toggle-btn");
    var cartContent = $(".mini-cart-content");
    var cartContent2 = $(".header-right");
    var cartCloseBtn = $(".mini-cart-close");
    var body = $("body");

    cartToggleBtn.on("click", function (e) {
      cartContent.toggleClass("mini-cart-content-toggle");
      cartContent2.toggleClass("active");
      body.addClass("overflow-hidden overlay");
      e.stopPropagation();
    });

    cartCloseBtn.on("click", function (e) {
      cartContent.removeClass("mini-cart-content-toggle");
      cartContent2.removeClass("active");
      body.removeClass("overflow-hidden overlay");
      e.stopPropagation();
    });

    body
      .on("click", function () {
        cartContent.removeClass("mini-cart-content-toggle");
        cartContent2.removeClass("active");
        body.removeClass("overflow-hidden overlay");
      })
      .find(cartContent)
      .on("click", function (e) {
        e.stopPropagation();
      });
  }

  /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
  var wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });

  /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
  if ($(".fancybox").length) {
    $(".fancybox").fancybox({
      openEffect: "elastic",
      closeEffect: "elastic",
      wrapCSS: "project-fancybox-title-style",
    });
  }

  /*------------------------------------------
            = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  /*------------------------------------------
       product slider
    -------------------------------------------*/
  if ($(".product-active").length) {
    $(".product-active").owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 20,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      navText: [
        '<i class="ti-arrow-left"></i>',
        '<i class="ti-arrow-right"></i>',
      ],
      nav: false,
      responsive: {
        0: {
          items: 2,
        },

        350: {
          items: 2,
        },
        500: {
          items: 2,
        },

        768: {
          items: 3,
        },
        992: {
          items: 3,
        },

        1200: {
          items: 4,
        },

        1400: {
          items: 5,
        },
      },
    });

    // Attach hover events to product-item
    $(".product-active").on("mouseover", ".product-item", function () {
      const image1 = $(this).find(".image1");
      const image2 = $(this).find(".image2");
      const originalSrc = image1.attr("src");
      image1.data("originalSrc", originalSrc); // Store the original src
      image1.attr("src", image2.attr("src"));
    });

    $(".product-active").on("mouseout", ".product-item", function () {
      const image1 = $(this).find(".image1");
      const originalSrc = image1.data("originalSrc");
      image1.attr("src", originalSrc);
    });
  }
  /*------------------------------------------
      category-active
    -------------------------------------------*/
  if ($(".category-active").length) {
    $(".category-active").owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 20,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      navText: [
        '<i class="ti-arrow-left"></i>',
        '<i class="ti-arrow-right"></i>',
      ],
      nav: false,
      responsive: {
        0: {
          items: 2,
        },

        350: {
          items: 2,
        },
        500: {
          items: 2,
        },

        768: {
          items: 2,
        },
        992: {
          items: 3,
        },

        1200: {
          items: 4,
        },

        1400: {
          items: 4,
        },
      },
    });
  }

  /*------------------------------------------
      unique-category-active
    -------------------------------------------*/
  if ($(".unique-category-active").length) {
    $(".unique-category-active").owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 20,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      navText: [
        '<i class="ti-arrow-left"></i>',
        '<i class="ti-arrow-right"></i>',
      ],
      nav: false,
      responsive: {
        0: {
          items: 2,
        },

        350: {
          items: 2,
        },
        500: {
          items: 2,
        },

        768: {
          items: 2,
        },
        992: {
          items: 3,
        },

        1200: {
          items: 4,
        },

        1400: {
          items: 5,
        },
      },
    });
  }

  /*------------------------------------------
    mobail-active
    -------------------------------------------*/
  $(document).ready(function () {
    function activateOwlCarousel() {
      if ($(window).width() <= 991) {
        if ($(".mobail-active").length) {
          $(".mobail-active").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 0,
            loop: true,
            items: 1,
            autoplayHoverPause: true,
            dots: true,
            nav: false,
          });
        }
      } else {
        if ($(".mobail-active").hasClass("owl-carousel")) {
          $(".mobail-active")
            .trigger("destroy.owl.carousel")
            .removeClass("owl-carousel owl-loaded");
          $(".mobail-active").find(".owl-stage-outer").children().unwrap();
        }
      }
    }

    activateOwlCarousel();

    $(window).resize(function () {
      activateOwlCarousel();
    });
  });

  $(document).ready(function () {
    $(".product-popup").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
      },
    });
  });

  /*-----------------------
       cart-plus-minus-button 
     -------------------------*/
  $(".cart-plus-minus").append(
    '<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>'
  );
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
      $("#quantity").val(newVal);
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        $("#quantity").val(newVal);
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  // // Screen Width
  // var screen_width = window.screen.width;

  // gsap.registerPlugin(ScrollTrigger);

  // // Active GSAP
  // if (document.querySelector("#has_smooth").classList.contains("smooth-scrool-animate")) {
  //     const smoother = ScrollSmoother.create({
  //         smooth: 1.35,
  //         effects: screen_width < 1025 ? false : true,
  //         smoothTouch: 0.1,
  //         normalizeScroll: false,
  //         ignoreMobileResize: true,
  //     });
  // }

  // gsap.to('.zoom-image', {
  //     scale: 1, // Scale to which you want to zoom in
  //     scrollTrigger: {
  //         trigger: '.multi-item',
  //         start: 'top bottom',
  //         end: 'bottom top',
  //         scrub: true,
  //     },
  // });

  // sticky-sec
  // $(window).scroll(function () {
  //     var navbar = $("#sticky-sec");
  //     if (navbar.length === 0) {
  //         return;
  //     }

  //     var sticky = navbar.offset().top;

  //     if ($(window).scrollTop() >= sticky) {
  //         navbar.addClass("add-black");
  //     } else {
  //         navbar.removeClass("add-black");
  //     }

  //     if ($(window).scrollTop() === 0) {
  //         navbar.removeClass("add-black");
  //     }
  // });

  // $(document).ready(function(){
  //     function isHoveringClassRemove() {
  //         return $('.class-remove:hover').length > 0;
  //     }
  //     $('.class-remove').hover(
  //         function() {
  //             $('.multi-section').removeClass('add-black');
  //         }, function() {
  //             if (!isHoveringClassRemove()) {
  //                 $('.multi-section').addClass('add-black');
  //             }
  //         }
  //     );

  //     $('.multi-item').hover(
  //         function() {
  //             if (!isHoveringClassRemove()) {
  //                 $('.multi-section').addClass('add-black');
  //             }
  //         }, function() {
  //             if (!isHoveringClassRemove()) {
  //                 $('.multi-section').addClass('add-black');
  //             }
  //         }
  //     );
  // });

  // document.addEventListener("DOMContentLoaded", () => {
  //     // Screen Width
  //     const screen_width = window.screen.width;

  //     // Check if the element exists and has the required class
  //     const smoothAnimateElement = document.querySelector("#smooth-animate");
  //     if (smoothAnimateElement && smoothAnimateElement.classList.contains("smooth-scrool-animate")) {
  //         const smoother = ScrollSmoother.create({
  //             effects: screen_width < 1025 ? false : true,
  //             smooth: 1.35,
  //             ignoreMobileResize: true,
  //             normalizeScroll: false,
  //             smoothTouch: 0.1,
  //         });

  //         ScrollTrigger.refresh();
  //     }
  // });

  // gsap.to(".product-single-image", {
  //     scrollTrigger: {
  //         trigger: ".product-right",
  //         start: "top top",
  //         end: "bottom bottom",
  //         pin: true,
  //         pinSpacing: false,
  //         scrub: true
  //     }
  // });

  /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
  $("body").append(
    "<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>"
  );

  function toggleBackToTopBtn() {
    var amountScrolled = 1000;
    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("slow");
    } else {
      $("a.back-to-top").fadeOut("slow");
    }
  }

  $(".back-to-top").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });

  // JavaScript to remove the controls attribute if it's present
  const videoElements = document.querySelectorAll(".no-controls");
  videoElements.forEach((video) => {
    video.removeAttribute("controls");
  });

  // dropdown menu

  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("active");
      document.querySelectorAll(".menu-item").forEach((other) => {
        if (other !== this) {
          other.classList.remove("active");
        }
      });
    });
  });

  /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
  $(window).on("load", function () {
    preloader();
  });

  /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
  $(window).on("scroll", function () {
    toggleBackToTopBtn();
  });

  /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
  $(window).on("resize", function () {
    clearTimeout($.data(this, "resizeTimer"));
  });

  $(".product-area").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 8,
    navigator: false,
    dots: false,
    arrow: false,
  });
})(window.jQuery);

// Add to Cart functionality
$(".addToCart").on("click", function (e) {
  e.preventDefault();

  $(".addToCart").css("display", "none");
  $(".loadingBtn").css("display", "block");

  var productId = $("#variantId").val();
  var quantity = $("#quantity").val();

  $.ajax({
    type: "POST",
    url: "/cart/add",
    dataType: "json",
    data: {
      id: productId,
      quantity: quantity,
    },
    success: function (data) {
      console.log("Item added to cart:", data);
      // Update cart count
     fetch(window.Shopify.routes.root + "cart.js")
  .then((response) => response.json())
  .then((cartData) => {
    $(".cartCount").text(cartData.item_count);

    // Calcular subtotal con descuento
    const discountPercentage = 20; // Cambia este porcentaje si es necesario
    const originalSubtotal = cartData.items_subtotal_price / 100;
    const discountedSubtotal = (originalSubtotal - (originalSubtotal * discountPercentage) / 100).toFixed(2);

    $("#subtotalAmount").text(discountedSubtotal); // Actualizar subtotal
    console.log("Updated cart data:", cartData);
    updateCartDisplay(cartData);
  });

      $(".mini-cart-content").addClass("mini-cart-content-toggle");

      $(".addToCart").css("display", "block");
      $(".loadingBtn").css("display", "none");
    },
    error: function (error) {
      console.error("Error adding item to cart:", error);
    },
  });
});
// Slider product Add to Cart functionality
$(".sliderAddToCart").on("click", function (e) {
  e.preventDefault();

  $(".cartBtn").css("display", "none");
  $(".loadingBtn").css("display", "block");

  var productId = $(this).attr("data-itemid");
  console.log("Slider Add to Cart clicked", productId);
  $.ajax({
    type: "POST",
    url: "/cart/add",
    dataType: "json",
    data: {
      id: productId,
      quantity: 1,
    },
    success: function (data) {
      console.log("Item added to cart:", data);
      // Update cart count
      fetch(window.Shopify.routes.root + "cart.js")
        .then((response) => response.json())
        .then((cartData) => {
          $(".cartCount").text(cartData.item_count);
          var priceFloat = (cartData.items_subtotal_price / 100).toFixed(2);
          $("#subtotalAmount").text(priceFloat);
          console.log("Updated cart data:", cartData);
          updateCartDisplay(cartData);
        });
      $(".mini-cart-content").addClass("mini-cart-content-toggle");

      $(".cartBtn").css("display", "block");
      $(".loadingBtn").css("display", "none");
    },
    error: function (error) {
      console.error("Error adding item to cart:", error);
    },
  });
});

// Remove from cart functionality
function removeCartItem(line) {
  var productId = $(this).attr("data-line");
  $.ajax({
    type: "POST",
    url: "/cart/change",
    dataType: "json",
    data: {
      line: line,
      quantity: 0,
    },
    success: function (data) {
      console.log("Item Remove to cart:", data);
      // Update cart count
      fetch(window.Shopify.routes.root + "cart.js")
        .then((response) => response.json())
        .then((cartData) => {
          $(".cartCount").text(cartData.item_count);
          var priceFloat = (cartData.items_subtotal_price / 100).toFixed(2);
          $("#subtotalAmount").text(priceFloat);
          console.log("Updated cart data:", cartData);
          updateCartDisplay(cartData);
        });
      $(".mini-cart-content").addClass("mini-cart-content-toggle");
    },
    error: function (error) {
      console.error("Error adding item to cart:", error);
    },
  });
}

// Remove from cart functionality
function updateValue(line, quantity, type) {
  var qty = parseInt(quantity);
  if (type == "inc") {
    qty = quantity + 1;
  }
  if (type == "dec") {
    qty = quantity - 1;
  }
  console.log("Line:", line, "Quantity:", qty);
  $.ajax({
    type: "POST",
    url: "/cart/change",
    dataType: "json",
    data: {
      line: line,
      quantity: qty,
    },
    success: function (data) {
      console.log("Item Remove to cart:", data);
      // Update cart count
      fetch(window.Shopify.routes.root + "cart.js")
        .then((response) => response.json())
        .then((cartData) => {
          $(".cartCount").text(cartData.item_count);
          var priceFloat = (cartData.items_subtotal_price / 100).toFixed(2);
          $("#subtotalAmount").text(priceFloat);
          console.log("Updated cart data:", cartData);
          updateCartDisplay(cartData);
        });
      $(".mini-cart-content").addClass("mini-cart-content-toggle");
    },
    error: function (error) {
      console.error("Error adding item to cart:", error);
    },
  });
}

//Add To Checkout
$(".buyCheckout").on("click", function (e) {
  e.preventDefault();
  var productId = $("#variantId").val();
  var quantity = $("#quantity").val();
  $.ajax({
    type: "POST",
    url: "/cart/add",
    dataType: "json",
    data: {
      id: productId,
      quantity: quantity,
    },
    success: function (data) {
      var current_url = "/checkout";
      window.location.href = current_url;
    },
  });
});

// Function to update cart display
function updateCartDisplay(cartData) {
  var cartContainer = document.getElementById("mini-cart");
  cartContainer.innerHTML = ""; // Clear existing content

  cartData.items.forEach((item, index) => {
    const itemHTML = createCartItemHTML(item, index);
    cartContainer.insertAdjacentHTML("beforeend", itemHTML);
  });
}

function createCartItemHTML(item, index) {
  // Define el porcentaje de descuento
  const discountPercentage = 20; // Cambia este porcentaje según sea necesario
  const originalPrice = item.price / 100; // Precio original del producto
  const discountedPrice = (originalPrice - (originalPrice * discountPercentage) / 100).toFixed(2); // Aplica el descuento

  return `
    <div class="mini-cart-item clearfix">
      <div class="mini-cart-item-image">
        <a href="${item.url}">
          <img
            src="${item.featured_image.url}"
            alt="${item.featured_image.alt ? item.featured_image.alt : ""}"
            width="300"
            height="auto"
          >
        </a>
      </div>
      <div class="mini-cart-item-des">
        <div class="mini-cart-item-des-top">
          <h4>
            <a href="${item.url}">${item.title}</a>
          </h4>
          <ul class="product-text-sub">
            <li>${item.variant_title ? item.variant_title : "Black"}</li>
          </ul>
        </div>
        <span class="price">
          <span class="discounted-price">€${discountedPrice}</span>
          <span class="original-price" style="text-decoration: line-through; color: gray; font-size: 0.9em; margin-left: 5px;">
            €${originalPrice.toFixed(2)}
          </span>
        </span>
      </div>
      <div class="pro-single-btn">
        <div class="quantity cart-plus-minus">
          <input type="text" value="${item.quantity}">
          <div class="dec qtybutton" onclick="updateValue(${index + 1}, ${
    item.quantity
  }, 'dec')">-</div>
          <div class="inc qtybutton" onclick="updateValue(${index + 1}, ${
    item.quantity
  }, 'inc')">+</div>
        </div>
        <a href="#" class="dlt-btn" onclick="removeCartItem(${index + 1})">
          <i class="ti-trash"></i>
        </a>
      </div>
    </div>
  `;
}


//Ajax Search Result
$(document).ready(function () {
  $("#search-box").keyup(function () {
    console.log("searching...");
    const search_result = $(".search-lists-loop");
    const query = document.querySelector("input").value;
    const searchSection = $(".search-suggest");
    var ajax_spiner = $(".search-loading");

    if (query != "") {
      $.ajax({
        url: "/search/suggest.json?q=" + query + "&resources[type]=product",
        type: "GET",
        dataType: "json",
        beforeSend: function () {
          ajax_spiner.show();
        },
      }).done(function (data) {
        if (data.resources.results.products != null) {
          searchSection.css({
            visibility: "visible",
            opacity: 1,
          });
          $(search_result).empty();
          data.resources.results.products.forEach(function (product) {
            console.log(product);
            searchSection.show();
            var html = '<a class="product" href="' + product.url + '">';
            html += '<span><img src="' + product["image"] + '" alt=""></span>';
            html += "<small>" + product.title + "</small>";
            html += " </a>";
            ajax_spiner.hide();
            $(search_result).append(html);
          });
        } else {
          searchSection.hide();
          $(search_result).empty();
          $(search_result).append("<li>No Data Found</li>");
        }
      });
    } else {
      searchSection.hide();
      $(search_result).empty();
      $(search_result).append("<li>No Data Found</li>");
    }
    $(search_result).empty();
  });
});
