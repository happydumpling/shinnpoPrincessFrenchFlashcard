function textblock() {
  document.getElementById("show").style.visibility = "visible";
}

function textgo() {
  document.getElementById("click").style.visibility = "hidden";
}

function dialogue() {
  document.getElementById("desc").style.visibility = "hidden";
  document.getElementById("begin").innerHTML = "Bonjour, Monsieur! (But how do I say 'how are you?)";
  document.getElementById("more").style.visibility = "hidden";
  document.getElementById("moreagain").style.visibility = "visible";
}

function learn() {
  document.getElementById("show").style.visibility = "hidden";
  document.getElementById("moreagain").style.visibility = "hidden";
  document.getElementById("flash").style.visibility = "visible";
  document.getElementById("next").style.visibility = "visible";
}

jQuery(function($){
  $.getJSON("https://spreadsheets.google.com/feeds/list/1drpkpwOh-omRcTLbr1EycVLNLBpvY5AySulIYdk9MKk/od6/public/values?alt=json",
            function(data) {
    vocabWords = data.feed.entry;
    numVocabWords = vocabWords.length;
   });
  var flashcard = document.getElementById('flashcard');
  var refreshBtns = document.getElementsByClassName('refresh');
  flashcard.addEventListener('click', function() {
    this.classList.toggle('flipped');
  }, false);
});


function bye() {
 // document.getElementById("flash").style.visibility = "visible";
  document.getElementById("flashcard--content_en").innerHTML = "How's it going?"
  document.getElementById("flashcard--content_fr").innerHTML = "Ça va?"
  document.getElementById("next").style.visibility = "hidden"
  document.getElementById("next1").style.visbility = "visible"
}

function bye1() {
  document.getElementById("flash").style.visibility = "hidden"
  document.getElementById("show").style.visibility = "visible"
  document.getElementById("begin").innerHTML = "Comment allez-vous?"

// function changetext() {
//   var demo = document.getElementById("flashcard--content_en");
//   if (demo.innerHTML ==="How are you?") {
//     demo.innerHTML = "How's it going?";
//   }
//  }



  // document.getElementById("flash").style.visibility = "hidden";
  // document.getElementById("show").style.visibility = "visible"
  // document.getElementById("show").innerHTML = "Comment allez-vous?"


// for (i = 0; i < refreshBtns.length; i++) {
// 	refreshBtns[i].addEventListener('click', function(e) {
// 		e.stopPropagation();
// 		e.preventDefault();
// 		var randomNum = getRandomInt(0, numVocabWords);
// 		newWord = vocabWords[randomNum];
// 		var enContent = document.getElementById('flashcard--content_en');
// 		var esContent = document.getElementById('flashcard--content_es');
// 		enContent.textContent = newWord.gsx$en.$t;
// 		esContent.textContent = newWord.gsx$es.$t;
// 	}, false);
// }

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
}
