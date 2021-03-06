'use strict';

var userMenuClick = false;
var videoModalOpen = false;
var videoUrl = $('#video').attr('src');
var isFirefox = typeof InstallTrigger !== 'undefined';

function checkSize() {
  var bodyWidth = parseInt($("body").css("width"));
  console.log('bodyWidth', bodyWidth);
  if (bodyWidth <= 1000) {
    mobileMenu();
    hideMenuAfterUse();
  } else {
    console.log('le yay');
    desktopMenu();
  }
}

function firefoxFix() {
  console.log('from firefoxFix');
  if (isFirefox) {
    $(".video-section").css('display', 'none');
  }
}

function mobileMenu() {
  $(".menu-trigger").removeClass('active');
  $(".menu-ul").removeClass('slideMenu');
}

function hideMenuAfterUse() {
  $(".menu-item").on('click', function () {
    console.log('hide that menu boo');
    $(".menu-ul").removeClass('slideMenu');
  });
}

function desktopMenu() {
  $(document).scroll(function () {
    var top = $(document).scrollTop();
    if (top < "600") {
      userMenuClick = false;
    };
    if (top > "600" && !userMenuClick) {
      //after you've scrolled 600 pixels...
      $(".menu-trigger").removeClass('active');
      $(".menu-ul").removeClass('slideMenu');
      userMenuClick = false;
    } else {
      $(".menu-trigger").addClass('active');
      $(".menu-ul").addClass('slideMenu');
    }
  });
};

(function menuSlide() {
  $('.menu-trigger').on('click', function () {
    $(this).toggleClass('active');
    $('.menu-ul').toggleClass('slideMenu');
    userMenuClick = !userMenuClick;
  });
}).call(undefined);

function smoothScroll() {
  $('a[rel="relativeanchor"]').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
};

function openVideo() {
  $('.play-button').on('click', function (e) {
    e.stopPropagation();
    $('#video').attr('src', videoUrl + '?&autoplay=1');
    videoModalOpen = true;
    console.log('open video');
    $('#videoModal').fadeIn('slow');
    $('#videoOverlay').addClass('video-overlay-dark');
  });
};

function closeVideo() {
  $('#videoOverlay').on('click', function (e) {
    if (videoModalOpen) {
      console.log('close video');
      videoModalOpen = false;
      $('#videoModal').fadeOut();
      $('#videoOverlay').removeClass('video-overlay-dark');
    };
    //Assign video src to null to stop the video playing
    $('#video').attr('src', '');
  });
};

$('#videoModal').on('click', function (e) {
  e.stopPropagation();
});

$(document).ready(function () {

  checkSize();
  smoothScroll();
  openVideo();
  closeVideo();
  firefoxFix();
});

$(window).resize(function () {
  console.log('window resizing');
  checkSize();
});

//TWITTER SHARE BUTTON
!function (d, s, id) {
  var js,
      fjs = d.getElementsByTagName(s)[0],
      p = /^http:/.test(d.location) ? 'http' : 'https';if (!d.getElementById(id)) {
    js = d.createElement(s);js.id = id;js.src = p + '://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');

//FACEBOOK SHARE BUTTON

window.fbAsyncInit = function () {
  FB.init({
    appId: '1212124842175466',
    xfbml: true,
    version: 'v2.8'
  });
  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js,
      fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');