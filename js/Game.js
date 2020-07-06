class Game{
    constructor(){

    }
    getGameState(){
        var gamestaterefPosition = database.ref('gameState');
        gamestaterefPosition.on("value",function(data){
            gameState = data.val();
        })
    }
    Start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
        updateGame(State){
            database.ref('/').update({
                gameState: State
            })
        }
    }