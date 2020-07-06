class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);
        var input = createInput("Name");
        var buttton = createButton('Play');
        input.position(130,160);
        buttton.position(250,200);

        buttton.mousePressed(
            function(){
                input.hide();
                buttton.hide();

                var name = input.value();
                playerCount = playerCount+1;
                player.update(name);
                player.updateCount(playerCount);
            }
        )
    }
}