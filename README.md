# JQuery-plugin-win-a-prize

Win a prize plugin will allow a user to add a section to a website in which the user can choose a treasure chest to see if it is the winning chest. If it is a winning chest, it will display a winner image and show a button to claim the prize. If it is not the winning chest, it will display a non-winning image and caption.

The plugin will require the user to enter a section element with a div id: “game”, and once the plugin is called it will add this section to the website as described above.

The images and js folder should be saved in the same directory as your html index file.
Once these folders have been saved in your directory, you can call the plugin in your javascript file with: 
•	$(“#game”).winPrize();

Files required for this plugin from html are as follows:
•	Plugin javascript file: “js/jquery.win-prize.js”
•	Jquery javascript (file/url)
•	    <script src = "https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
•	    <script src = "js/jquery.win-prize.js"></script

index.html: your html file which includes:
<section>
  <div id="game"></div>
</section>

Script.js: your javascript file which calls:
 $("#game").winPrize();

NOTE: winner.html is the default page which the form will submit to which only displays a short message: “Check your email for your prize!”

CUSTOMIZABLE PROPERTIES:
•	border: Border around the entire game section
        default: 10px solid black
•	background: background color for entire section
        rgb(202,208,214)
•	imageBorder: border around treasure chest images
        default: 5px solid #555
•	imageHeight: height of treasure chest image
        default: 100px
•	imageWidth: width of treasure chest image
        default 100px
•	captionColor: color of text under the game images
        default: rgb(202,208,214)
•	captionBackground: background of caption text
        default: black
•	numOfChests: number of chests displayed
        default: 10
•	gethtml: address to send form submit to (name and email)
        default: js/winner.html
•	winningCaption: caption displayed if user is a winner
        default: CONGRATULATIONS!
•	losingCaption: caption displayed if user does not win
        default: SORRY, NOT A WINNER! BETTER LUCK NEXT TIME!
