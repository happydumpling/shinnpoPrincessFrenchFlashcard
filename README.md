<head>
   <title>Shinnpo - French Cafe</title>

   <background-image: url("http://preview.ibb.co/fwexS5/japanesecafebg.jpg")>

   <link href="https://fonts.googleapis.com/css?family=Anton|Bitter:400,700|Noto+Serif|Sigmar+One" rel="stylesheet">

   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 </head>

 <body>
     <div class="container">
       <div id="appear">
         <div class="row">
           <h1><span>  DESTINATION FRANCE:</span></h1>
           <h2><span>LE CAFÉ</span></h2>
         </div>
         <div id="desc" class="row">
             <p>Here, you will learn polite </br>conversation and how to </br>order items.</p>
             <button id="click" type="button" class="btn btn-link" onclick="textblock(); textgo();" style="font-size:20px; color:#000000;"><p>Click here to continue</p></button>
         </div>
       </div>

       <div id="sam"><img src="http://image.ibb.co/dZNPN5/samtrans.png"></div>
       <div id="cafetable"><img src="http://image.ibb.co/cZ229k/table.png"></div>
       <div id="cafetable1"><img src="http://image.ibb.co/cZ229k/table.png"></div>
      <div id="cafeman"><img src="http://image.ibb.co/kyp64k/cafemantrans.png"></div>

     <div id=show style="visibility:hidden;">
         <div id="appear" class="talkbubble" style="font-size:16px; font-family: 'Noto Serif', serif;"><p id="begin">We're at the cafe! I should speak with the waiter using vocabulary I learned earlier.</p><button id="more" type="button" class="btn btn-link"><span class="glyphicon glyphicon-chevron-right" onClick="dialogue()"></span></button><button id="moreagain" type="button" class="btn btn-link" style="visibility:hidden;"><span class="glyphicon glyphicon-chevron-right" onClick="learn()"></span></button>
         </div>
      </div>

      <div class="flashcards" id = "flash">
       <div class="containers">
           <div class="row" id="midrow">

             <div class="flip-container" id="flashcard">
               <div class="flipper">
                 <div class="front">
                   <span id="flashcard--content_en">How are you?</span>
<!--                     <button type="button" class="glyphicon glyphicon-volume-up"</button> -->
                 </div>
                 <div class="back">
                   <span id="flashcard--content_fr">Comment allez-vous?</span>
                 </div>
               </div>
             </div>
             <div class="button-container">
               <button id="next" class="refresh"><i class="glyphicon glyphicon-chevron-right" aria-hidden="true" onClick="bye()"></i></button>
               <button id="next1" class="refresh"><i class="glyphicon glyphicon-chevron-right" aria-hidden="true" onClick="bye1()"></i></button>
             </div>
        </div>
       </div>
     </div>

<!--       <div class="container bg-info">
               <img width="1074" height="626" src="Eiffel_Tower_Background.png" class="game-bg"/>
               <audio id="boatAudio" src="audio/Un Bateau.mp3"></audio>
                 <button onclick="document.getElementById('boatAudio').play()" class="sun opa"
                 data-balloon="un soleil" data-balloon-pos="left">
                 <img src="http://www.clker.com/cliparts/s/O/R/1/l/i/happy-sun-hi.png" width="200" height="200">
                 </button>
               <audio id="airplaneAudio" src="audio/Un Avion.mp3"></audio>
                 <button onclick="document.getElementById('airplaneAudio').play()" class="bird opa"
                 data-balloon="un oiseau" data-balloon-pos="down">
                 <img src= "http://preview.ibb.co/iXkykQ/red_bird_png.gif" width="50" height="50">
                 </button>
               <audio id="airplaneAudio" src="audio/Un Avion.mp3"></audio>
                 <button onclick="document.getElementById('airplaneAudio').play()" class="tower opa"
                 data-balloon="le Tour Eiffel" data-balloon-pos="down">
                 <img src= "http://preview.ibb.co/h8LLzk/cropped_transparent_tower.gif" width="590" height="520">
                 </button>
               <audio id="carAudio" src="audio/Un Voiture.mp3"></audio>
                 <button onclick="document.getElementById('carAudio').play()" class="squirrel opa"
                 data-balloon="un écureuil" data-balloon-pos="up">
                 <img src="http://image.ibb.co/kWQW5Q/squirrel.png" width="60" height="80">
                 </button>
               <audio id="subwayAudio" src="audio/Le Metro.mp3"></audio>
                 <button onclick="document.getElementById('subwayAudio').play()" class="dog opa"
                 data-balloon="un chien" data-balloon-pos="up">
                 <img src="http://image.ibb.co/jqG4QQ/dog.png" width="150" height="135">
                 </button>
               <audio id="samAudio" src=""></audio>
                 <button onclick="document.getElementById('samAudio').play()" class="sam opa"
                  data-balloon-length="medium" data-balloon-visible data-balloon="hover over an object to see the name of it! click it to hear it!" data-balloon-pos="right">
                 <img src="http://image.ibb.co/kSaTVQ/sam.png" width="95" height="150"> -->
<!--                   </button>
               <button class="map-point" style="top:80%;right:60%">
                 <div class="content">
                   <div class="centered-y">
                     <h2>Let's Practice Flash Cards!</h2>
                     <p><a href=""></a></p>
                   </div>
                 </div>
               </button>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           </div>
           <h4>&nbsp;</h4>
         </div> -->
 </div>
 </body>
</html>
