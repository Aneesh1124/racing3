class Form {
    constructor(){
        
    }
    display(){
        var title = createElement('h2')
        title.html("CarRacing")
        title.position(430,0)
        var input = createInput("Name")
        input.position(750,150)
        var button = createButton("PLAY")
        button.position(750,180)
        var greeting = createElement('h3');
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playerCount = playerCount+1;
        player.update(name)
        player.updateCount(playerCount);  
        greeting.html("hello" + name)
        greeting.position(140,160)
        }
    )
 }

}