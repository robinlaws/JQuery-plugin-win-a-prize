(function ($) {
    
    $.fn.winPrize = function(options){
        var settings = $.extend( {
            border: '10px solid black',
            background: 'rgb(202, 208, 214)',
            imageBorder: '5px solid #555',
            imageHeight: '100px',
            imageWidth: '100px',
            captionColor: 'rgb(202, 208, 214)',
            captionBackground: 'black',
            numOfChests: '10',
            gethtml: 'js/winner.html',
            winningCaption: 'CONGRATULATIONS!',
            losingCaption: "SORRY, NOT A WINNER. BETTER LUCK NEXT TIME!"

        },options)

        return this.each(function(){
            setStartingImages(settings.numOfChests);
            setSectionProperties()
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
                image.attr('src', 'images/closedchest.png');
                image.appendTo("#chests");
            }
            $("#game").append('<h2 id="caption">PICK A CHEST FOR YOUR CHANCE TO WIN</h2>');
            $("#game").append('<button type = "button" class = "button" id = "winningButton">CLICK HERE TO CLAIM PRIZE</button>');
        }

        /* 
        * setSectionProperties function to set section properties: border and background color are customizable.
        */
        function setSectionProperties() {
            $section = $("#game");
            $section.css({
                "border": settings.border,
                "justify-content": "center",
                "text-align": "center",
                "background-color": settings.background
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
                "cursor": "help"
            });
        }

        /* setCaptionProperties function to set caption properties: color and background are customizable.
        */
        function setCaptionProperties(){
            $caption = $("#caption");
            $caption.css({
                "color": settings.captionColor,
                "background-color" : settings.captionBackground
            });
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
                    $(this).attr("src", "images/winningchest.png");
                    $("#caption").text(settings.winningCaption);
                    $button.css("display", "flex");
                    disableClick();
                    claimPrizeButton();
                }else{
                    $(this).first().attr("src", "images/emptychest.png");
                    $("#caption").text(settings.losingCaption);    
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
            console.log($("#chests img"));
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
        * Form will default to a page provided, but is customizable.
        */
        
        function claimPrizeButton(){
            $("#winningButton").click(function(){
                $button.css("display", "none");
                const chests = $("#chests");
                chests.remove();
                const section = $("#game");
                section.append('<form method = "post" action= \"' + settings.gethtml + '\"><label for="winner_name">Name:</label><input type="text" id="winner_name"><br><label for="winner_email">Email:</label><input type="text" id="winner_email"><br><input type = "submit" value="Submit"></form>');
                console.log("done");
            });
        }
    };
}(jQuery));
