window.onload = function(){
    draw("source-over");

    var buttons = document.getElementById("buttons").getElementsByTagName("a");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function(){
            draw(this.text);
            return false;
        };
    }
};

function draw(compositeStyle){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    //draw title
    context.font = "bold 40px Arial";
    context.textAlign = "center";
    context.textBasedline = "middle";
    context.fillStyle = "#150E0E";
    context.fillText("globalCompositeOperation = "+compositeStyle, canvas.width/2, 60);

    //draw a rect
    context.fillStyle = "#F6082A";
    context.fillRect(300, 150, 500, 500);

    //draw a triangle
    context.globalCompositeOperation = compositeStyle;
    context.fillStyle = "#1611F5";
    context.beginPath();
    context.moveTo(700, 250);
    context.lineTo(1000,750);
    context.lineTo(400, 750);
    context.closePath();
    context.fill();
}
