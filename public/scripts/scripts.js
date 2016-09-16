"use strict";

var text = {};

text.sentences = ["Well, I watch the shows, I mean, I really see a lot of great, you know, I watch your show, and all the other shows, and you have the generals, and you have certain people that are great.", "My whole life is about winning, I don't lose often, I almost never lose.", "She had a pen in her hand, which Secret Service is not liking because they don’t know what it is, whether it’s a little bomb.", "What do I know about it? All I know is what's on the internet.", "He referred to my hands, if they're small, something else must be small.", "I've said if Ivanka weren't my daughter, perhaps I'd be dating her.", "The beauty of me is that I'm very rich.", "I’m speaking with myself, number one, because I have a very good brain and I’ve said a lot of things.", "My fingers are long and beautiful, as, it has been well been documented, are various other parts of my body.", "I know words, I have the best words.", "You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful, piece of ass.", "I will build a great wall – and nobody builds walls better than me, believe me – and I’ll build them very inexpensively.", "It’s freezing and snowing in New York – we need global warming!", "The point is, you can never be too greedy.", "I don't bring God into that picture....When I go to church and when I drink my little wine and have my little cracker, I guess that is a form of forgiveness.", "Beautiful, famous, successful, married – I’ve had them all, secretly, the world’s biggest names, but unlike Geraldo I don’t talk about it.", "We’re losing a lot of people because of the Internet, we have to see Bill Gates and a lot of different people who really understand what’s happening and maybe, in some ways, closing that Internet up in some ways.", "I beat China all the time.", "A certificate of live birth is not the same thing by any stretch of the imagination as a birth certificate.", "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.", "People are tired of these nice people.", "How come every time I show anger, disgust or impatience, enemies say I had a tantrum or meltdown—stupid or dishonest people?", "Sorry losers and haters, but my IQ is one of the highest—and you all know it!", "I never fall for scams. I am the only person who immediately walked out of my ‘Ali G’ interview.", "I promise not to talk about your massive plastic surgeries that didn’t work.", "A person who is flat chested is very hard to be a 10, ok?", "My IQ is one of the highest — and you all know it!", "I was down there, and I watched our police and our firemen, down on 7-Eleven, down at the World Trade Center, right after it came down.", "I watch the speeches of these people, and they say the sun will rise, the moon will set, all sorts of wonderful things will happen, and people are saying, \"What is going on? I just want want a job.\"", "I have so many websites. I have them all over the place. I hire people ... it costs me three dollars.", "I have an attention span that's as long as it has to be."];

text.paragraphs = ["I get up, take a shower and wash my hair. Then I read the newspapers and watch the news on television, and slowly the hair dries. It takes about an hour. I don’t use the blow dryer. Once it’s dry I comb it. Once I have it the way I like it—even though nobody else likes it—I spray it and it’s good for the day.", "I’m telling you, I used to use the word incompetent. Now I just call them stupid. I went to an Ivy League school. I’m very highly educated. I know words, I have the best words...but there is no better word than stupid. Right?", "Look, We can bring the American Dream back. That I will tell you. We're bringing it back. Okay? And I understand what you're saying. And I get that from so many people. 'Is The American Dream dead?' They are asking me the question, 'Is the American Dream dead?' And the American Dream is in trouble. That I can tell you. Okay? It's in trouble. But we're going to get it back and do some real jobs. How about the man with that beautiful red hat? Stand up! Stand up! What a hat!", "I get sued all the time, okay. I run a big business. You know I've always said it's very, very hard for a person who is very successful. I have done so many deals. Almost all of them have been tremendously successful. You'll see that when I file my statements. I mean you will see; you will be very proud of me, okay.", "And did you notice that baby was crying through half of the speech and I didn’t get angry? Not once. Did you notice that? That baby was driving me crazy. I didn’t get angry once because I didn’t want to insult the parents for not taking the kid out of the room!", "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert. If you saw the Miss Universe girls you would reconsider!", "I think Lincoln succeeded for numerous reasons. He was a man who was of great intelligence, which most presidents would be. But he was a man of great intelligence, but he was also a man that did something that was a very vital thing to do at that time. Ten years before or 20 years before, what he was doing would never have even been thought possible. So he did something that was a very important thing to do, and especially at that time.", "Look, having nuclear—my uncle was a great professor and scientist and engineer, Dr. John Trump at MIT; good genes, very good genes, OK, very smart, the Wharton School of Finance, very good, very smart—you know, if you’re a conservative Republican, if I were a liberal, if, like, OK, if I ran as a liberal Democrat, they would say I'm one of the smartest people anywhere in the world—it’s true!—but when you're a conservative Republican they try—oh, do they do a number—that’s why I always start off: Went to Wharton, was a good student, went there, went there, did this, built a fortune—you know I have to give my like credentials all the time, because we’re a little disadvantaged—but you look at the nuclear deal, the thing that really bothers me—it would have been so easy, and it’s not as important as these lives are (nuclear is powerful; my uncle explained that to me many, many years ago, the power and that was 35 years ago; he would explain the power of what's going to happen and he was right—who would have thought?), but when you look at what's going on with the four prisoners—now it used to be three, now it’s four—but when it was three and even now, I would have said it's all in the messenger; fellas, and it is fellas because, you know, they don't, they haven’t figured that the women are smarter right now than the men, so, you know, it’s gonna take them about another 150 years—but the Persians are great negotiators, the Iranians are great negotiators, so, and they, they just killed, they just killed us."];
"use strict";

$(document).ready(function () {

	// DESKTOP
	$("#paragraphButton").on("click", function () {
		console.log("paragraph button click");
		$("#paragraphButton img").css("display", "block");
		$("#sentenceButton img").css("display", "none");
	});

	$("#sentenceButton").on("click", function () {
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

	$('.numberSlider').on('change', function () {
		sliderNumber = this.value;
		console.log(this.value);
	});

	//FIND USER'S SENTENCE/PARAGRAPH SELECTION

	$('.button').on('click', function () {
		var userSelection = $(this).find('input')[0].value;
		var textArray = text[userSelection];
		// console.log(textArray);
		// CHOOSE RANDOM NUMBERED ITEM FROM ARRAY

		function getRandom(arr) {
			return arr[Math.floor(Math.random() * arr.length)];
		}
		function grabRandomItems(count, sourceArray) {
			var outputArray = [];
			while (count) {
				for (;;) {
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
		console.log(grabRandomItems(sliderNumber, textArray));
		$(".ipsumOutput").empty().append("<p>" + resultsToPage + "</p>");
	});

	// MOBILE

	// SET VARIABLE FOR INPUT NUMBER
	var numberSelect;

	// PLUS/MINUS SELECT
	//FIND USER'S LENGTH SELECTION
	$('.plus, .minus').on('click', function () {

		// ASSIGN VALUE TO INPUT NUMBER VARIABLE
		numberSelect = parseInt($('#numberSelect').val());

		// MAKE SURE VALUE ENTERED IS A NUMBER, IF NOT CHANGE TO 1
		if (isNaN(numberSelect)) {
			numberSelect = 1;
		}

		// INCREMENT NUMBER BASED ON ITS DATASET
		numberSelect += parseInt($(this).data('increment'));

		// IF THE NEXT NUMBER IS LESS THAN 1 OR GREATER THAN 6, STOP THE FUNCTION FROM RUNNING
		if (numberSelect < 1 || numberSelect > 6) {
			return; // STOP THE FUNCTION FROM RUNNING
		}

		$('#numberSelect').val(numberSelect);
		console.log(numberSelect);
	});

	//FIND USER'S SENTENCE/PARAGRAPH SELECTION

	// var resultsToPost;

	$('[name="selection"]').on('click', function () {
		var textArray = text[this.value];
		// CHOOSE RANDOM NUMBERED ITEM FROM ARRAY

		for (var i = 0; i < numberSelect; i++) {
			var arraySelection = Math.floor(Math.random() * textArray.length + 1);
			var resultsToPost = textArray[arraySelection];
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
		appId: '1650785235211767',
		xfbml: true,
		version: 'v2.7'
	});
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