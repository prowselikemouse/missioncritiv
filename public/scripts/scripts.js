"use strict";

var text = {};

text.sentences = ["Well, I watch the shows, I mean, I really see a lot of great, you know, I watch your show, and all the other shows, and you have the generals, and you have certain people that are great.", "My whole life is about winning, I don't lose often, I almost never lose.", "She had a pen in her hand, which Secret Service is not liking because they don\u2019t know what it is, whether it\u2019s a little bomb.", "What do I know about it? All I know is what's on the internet.", "He referred to my hands, if they're small, something else must be small.", "I've said if Ivanka weren't my daughter, perhaps I'd be dating her.", "The beauty of me is that I'm very rich.", "I\u2019m speaking with myself, number one, because I have a very good brain and I\u2019ve said a lot of things.", "My fingers are long and beautiful, as, it has been well been documented, are various other parts of my body.", "I know words, I have the best words.", "You know, it really doesn\u2019t matter what the media write as long as you\u2019ve got a young, and beautiful, piece of ass.", "I will build a great wall \u2013 and nobody builds walls better than me, believe me \u2013 and I\u2019ll build them very inexpensively.", "It\u2019s freezing and snowing in New York \u2013 we need global warming!", "The point is, you can never be too greedy.", "I don't bring God into that picture....When I go to church and when I drink my little wine and have my little cracker, I guess that is a form of forgiveness.", "Beautiful, famous, successful, married \u2013 I\u2019ve had them all, secretly, the world\u2019s biggest names, but unlike Geraldo I don\u2019t talk about it.", "We\u2019re losing a lot of people because of the Internet, we have to see Bill Gates and a lot of different people who really understand what\u2019s happening and maybe, in some ways, closing that Internet up in some ways.", "I beat China all the time.", "A certificate of live birth is not the same thing by any stretch of the imagination as a birth certificate.", "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.", "People are tired of these nice people.", "How come every time I show anger, disgust or impatience, enemies say I had a tantrum or meltdown\u2014stupid or dishonest people?", "Sorry losers and haters, but my IQ is one of the highest\u2014and you all know it!", "I never fall for scams. I am the only person who immediately walked out of my \u2018Ali G\u2019 interview.", "I promise not to talk about your massive plastic surgeries that didn\u2019t work.", "A person who is flat chested is very hard to be a 10, ok?", "My IQ is one of the highest \u2014 and you all know it!", "I was down there, and I watched our police and our firemen, down on 7-Eleven, down at the World Trade Center, right after it came down.", "I watch the speeches of these people, and they say the sun will rise, the moon will set, all sorts of wonderful things will happen, and people are saying, \"What is going on? I just want want a job.\"", "I have so many websites. I have them all over the place. I hire people ... it costs me three dollars.", "I have an attention span that's as long as it has to be."];

text.paragraphs = ["I get up, take a shower and wash my hair. Then I read the newspapers and watch the news on television, and slowly the hair dries. It takes about an hour. I don\u2019t use the blow dryer. Once it\u2019s dry I comb it. Once I have it the way I like it\u2014even though nobody else likes it\u2014I spray it and it\u2019s good for the day.", "I\u2019m telling you, I used to use the word incompetent. Now I just call them stupid. I went to an Ivy League school. I\u2019m very highly educated. I know words, I have the best words...but there is no better word than stupid. Right?", "Look, We can bring the American Dream back. That I will tell you. We're bringing it back. Okay? And I understand what you're saying. And I get that from so many people. 'Is The American Dream dead?' They are asking me the question, 'Is the American Dream dead?' And the American Dream is in trouble. That I can tell you. Okay? It's in trouble. But we're going to get it back and do some real jobs. How about the man with that beautiful red hat? Stand up! Stand up! What a hat!", "I get sued all the time, okay. I run a big business. You know I've always said it's very, very hard for a person who is very successful. I have done so many deals. Almost all of them have been tremendously successful. You'll see that when I file my statements. I mean you will see; you will be very proud of me, okay.", "And did you notice that baby was crying through half of the speech and I didn\u2019t get angry? Not once. Did you notice that? That baby was driving me crazy. I didn\u2019t get angry once because I didn\u2019t want to insult the parents for not taking the kid out of the room!", "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert. If you saw the Miss Universe girls you would reconsider!", "I think Lincoln succeeded for numerous reasons. He was a man who was of great intelligence, which most presidents would be. But he was a man of great intelligence, but he was also a man that did something that was a very vital thing to do at that time. Ten years before or 20 years before, what he was doing would never have even been thought possible. So he did something that was a very important thing to do, and especially at that time.", "Look, having nuclear\u2014my uncle was a great professor and scientist and engineer, Dr. John Trump at MIT; good genes, very good genes, OK, very smart, the Wharton School of Finance, very good, very smart\u2014you know, if you\u2019re a conservative Republican, if I were a liberal, if, like, OK, if I ran as a liberal Democrat, they would say I'm one of the smartest people anywhere in the world\u2014it\u2019s true!\u2014but when you're a conservative Republican they try\u2014oh, do they do a number\u2014that\u2019s why I always start off: Went to Wharton, was a good student, went there, went there, did this, built a fortune\u2014you know I have to give my like credentials all the time, because we\u2019re a little disadvantaged\u2014but you look at the nuclear deal, the thing that really bothers me\u2014it would have been so easy, and it\u2019s not as important as these lives are (nuclear is powerful; my uncle explained that to me many, many years ago, the power and that was 35 years ago; he would explain the power of what's going to happen and he was right\u2014who would have thought?), but when you look at what's going on with the four prisoners\u2014now it used to be three, now it\u2019s four\u2014but when it was three and even now, I would have said it's all in the messenger; fellas, and it is fellas because, you know, they don't, they haven\u2019t figured that the women are smarter right now than the men, so, you know, it\u2019s gonna take them about another 150 years\u2014but the Persians are great negotiators, the Iranians are great negotiators, so, and they, they just killed, they just killed us."];
'use strict';

var userMenuClick = false;
var videoModalOpen = false;
var videoUrl = $('#video').attr('src');

function checkSize() {
  var bodyWidth = parseInt($("body").css("width"));
  console.log('bodyWidth', bodyWidth);
  if (bodyWidth <= 1000) {
    $(".menu-trigger").removeClass('active');
    $(".menu-ul").removeClass('slideMenu');
  } else {
    console.log('le yay');
    desktopMenu();
  }
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