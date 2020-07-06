class Player{
    constructor(){
        
    }
    update(name){
        var playerIndex = "Player"+playerCount;
        database.ref(playerIndex).set({
            'Name':  name
                  })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    getCount(){
    var playerCountPosition = database.ref('playerCount');
    playerCountPosition.on("value",function(data){
        playerCount = data.val();
    })
    }
}