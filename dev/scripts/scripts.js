$( document ).ready(function() {

	// DESKTOP
	$("#paragraphButton").on("click", function() {
		console.log("paragraph button click");
	    $("#paragraphButton img").css("display", "block");
	    $("#sentenceButton img").css("display", "none");
	});

	$("#sentenceButton").on("click", function() {
	    $("#sentenceButton img").css("display", "block");
	    $("#paragraphButton img").css("display", "none");
	});

	// SLIDER SELECT
	$('.numberSlider').ionRangeSlider({
	    min: 1,
	    max: 6,
	    from: 1
	});

	// SET VARIABLE FOR SLIDER NUMBER
	var sliderNumber;

	$('.numberSlider').on('change',function() {
		sliderNumber = this.value;
		console.log(this.value);
	});

	//FIND USER'S SENTENCE/PARAGRAPH SELECTION 

	$('.button').on('click',function() {
		var userSelection = ($(this).find('input')[0]).value;
		var textArray = text[userSelection];
		// console.log(textArray);
		// CHOOSE RANDOM NUMBERED ITEM FROM ARRAY

		function getRandom(arr) {
		  return arr[Math.floor(Math.random() * arr.length)];
		}
		function grabRandomItems(count, sourceArray) {
		  var outputArray = [];
		  while (count) {
		    for(;;) {
		      var item = getRandom(sourceArray);
		      if (outputArray.indexOf(item) === -1) {
		        outputArray.push(item);
		        break;
		      }
		    }
			count--;
			}
			return outputArray;
			console.log(outputArray);
		};	
		var outputDisplay = grabRandomItems(sliderNumber, textArray);
		var resultsToPage = outputDisplay.join('</br></br>');
		// DISPLAY ON PAGE
		console.log(grabRandomItems(sliderNumber, textArray))
		$(".ipsumOutput").empty().append(`<p>${resultsToPage}</p>`);
		});
	

	// MOBILE

	// SET VARIABLE FOR INPUT NUMBER
	var numberSelect;

	// PLUS/MINUS SELECT
	//FIND USER'S LENGTH SELECTION
	$('.plus, .minus').on('click', function() {

		// ASSIGN VALUE TO INPUT NUMBER VARIABLE
		numberSelect = parseInt($('#numberSelect').val());
		
		// MAKE SURE VALUE ENTERED IS A NUMBER, IF NOT CHANGE TO 1
		if (isNaN(numberSelect)) {
			numberSelect = 1;
		}

		// INCREMENT NUMBER BASED ON ITS DATASET
		numberSelect += parseInt($(this).data('increment'));

		// IF THE NEXT NUMBER IS LESS THAN 1 OR GREATER THAN 6, STOP THE FUNCTION FROM RUNNING
		if(numberSelect < 1 || numberSelect > 6) {
			return; // STOP THE FUNCTION FROM RUNNING
		}

		$('#numberSelect').val(numberSelect);
		console.log(numberSelect);
	});

	//FIND USER'S SENTENCE/PARAGRAPH SELECTION 

	// var resultsToPost;

	$('[name="selection"]').on('click',function() {
		var textArray = text[this.value];
		// CHOOSE RANDOM NUMBERED ITEM FROM ARRAY

		for (var i = 0; i < numberSelect; i++) {
		var arraySelection = Math.floor(Math.random() * (textArray.length) + 1);
		var resultsToPost = (textArray[arraySelection])
		// DISPLAY ON PAGE
		// $(".ipsumOutput").append(`<p>${resultsToPost}</p>`);
		// console.log(resultsToPost);	
		}

	});

//DISPLAY WORDS ON PAGE
});

// SHOW/HIDE ON WINDOW RESIZE

// var screenSize = $(window).width();
// if (screenSize < 600px) {}

//TWITTER SHARE BUTTON
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//FACEBOOK SHARE BUTTON
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1650785235211767',
      xfbml      : true,
      version    : 'v2.7'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));





