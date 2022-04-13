/*
* jquery win-prize plugin to display a game for user to choose a chest and see if they
* are a winner. This can be added to any website section.
* If you choose the right chest, it will open a form to enter user email and name. 
* Form post information can be customized through gethtml settings attribute. 
* See read me file for all customizable options.
* FOR DEMO PURPOSES: I have console logged the image classes so you can see the winning
* chest to see full plugin. (line 139)
*/
(function ($) {
    
    $.fn.winPrize = function(options){
        var settings = $.extend( {
            border: '10px solid black',
            background: 'black',
            imageBorder: 'none',
            imageHeight: '100px',
            imageWidth: '100px',
            captionColor: 'rgb(202, 208, 214)',
            captionBackground: 'black',
            numOfChests: '10',
            gethtml: 'win_js/winner.html',
            winningCaption: 'CONGRATULATIONS!',
            losingCaption: "SORRY, NOT A WINNER. BETTER LUCK NEXT TIME!",
            textFont: "Courier new"

        },options)

        return this.each(function(){
            $game= $('<div id="game"></div>');
            $(this).append($game)
            setStartingImages(settings.numOfChests);
            setGameProperties()
            setImageProperties();
            setCaptionProperties();
            setButtonProperties();
            setWinningChest(settings.numOfChests);
            chosenChest();
        })

        /* 
        * setStartingImages function to add images and h2 caption to display on page through #game section.
        */
        function setStartingImages(numOfChests){
            $startingImage = $('<div id="chests"></div>');
            $("#game").append($startingImage)
            for (var i=0; i < numOfChests; i++){
                var image = $('<img class="treasure">');
                image.attr('src', 'win_images/closedchest.png');
                image.appendTo("#chests");
            }
            $("#game").append('<h2 id="caption">PICK A CHEST FOR YOUR CHANCE TO WIN</h2>');
            $("#game").append('<button type = "button" class = "button" id = "winningButton">CLICK HERE TO CLAIM PRIZE</button>');
        }

        /* 
        * setSectionProperties function to set section properties: border and background color are customizable.
        */
        function setGameProperties() {
            $game_div = $("#game");
            $game_div.css({
                "border": settings.border,
                "justify-content": "center",
                "text-align": "center",
                "background" : settings.background,
                "animation" : "colorChangeGame 5s infinite",
                "margin": "0 auto",
                "padding": "10px",
            });
        }

        /* 
        * setImageProperties function to set image properties, border, height, and width are customizable.
        */
        function setImageProperties(){
            $treasure = $(".treasure");
            $treasure.css({
                "height": settings.imageHeight,
                "width": settings.imageWidth,
                "border": settings.imageBorder,
                "cursor": "pointer"
            });
        }

        /* setCaptionProperties function to set caption properties: color, text font and background are customizable.
        */
        function setCaptionProperties(){
            $caption = $("#caption");
            $caption.css({
                "color": settings.captionColor,
                "font-family" : settings.textFont,
                "background" : settings.captionBackground,
                "animation" : "colorChangeText 1s infinite"
            })
        }

        /* setButtonProperties function to set winning button properties.
        */
        function setButtonProperties(){
            $button = $("#winningButton");
            $button.css({
                "display": "none",
                "justify-content":"center",
                "align-items": "center",
                "margin" :"auto"
            });
        }

        /* 
        *  chosenChest click function to check if chest is a winner and will
        *  display caption/image accordingly.
        */ 
        function chosenChest(){
            $("#chests img").click(function(){
                if ($(this).hasClass("winner")){
                    $(this).attr("src", "win_images/winningchest.png");
                    $("#caption").text(settings.winningCaption);
                    $("#caption").css("animation", "none");
                    $("#game").css("animation", "none");
                    $button.css("display", "flex");
                    disableClick();
                    claimPrizeButton();
                }else{
                    $(this).first().attr("src", "win_images/emptychest.png");
                    $("#caption").text(settings.losingCaption);
                    $("#caption").css("animation", "none");
                    $("#game").css("animation", "none");    
                    disableClick();
                }
            });
        }

        /*
        * setWinningChest function will set a random chest to the winner using class "winner".
        */
        function setWinningChest(numOfChests) {
            let num = Math.floor(Math.random() * numOfChests);
            $("#chests img").eq(num).addClass("winner");
            console.log($("#chests img")); //TO BE REMOVED
        }

        /*
        * disableClick function will cancel all click events for chests after the user
        * has chosen a chest.
        */
        function disableClick() {
            $("#chests img").unbind("click");
        }

        /*
        * claimPrizeButton will display a form for user name and email if they are a winner.
        * Form will default to a page provided, but is customizable for post function.
        */
        function claimPrizeButton(){
            $("#winningButton").click(function(){
                $button.css("display", "none");
                const chests = $("#chests");
                chests.remove();
                const section = $("#game");
                section.append('<form method = "post" action= \"' + settings.gethtml + '\"><input type="text" id="winner_name" placeholder="Name"><br><input type="text" id="winner_email" placeholder="Email"><br><input type = "submit" value="Submit"></form>');
                console.log("done");
            });
        }
    };
}(jQuery));
