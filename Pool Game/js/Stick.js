function Stick() {
    this.position = {x:0, y:400};
}

Stick.prototype.update = function() {
    // this.position.x++;
    // Testing...
    this.position = Mouse.position;

    if(Mouse.left.pressed) {
        console.log("Pressed Left")
    }
}

Stick.prototype.draw = function() {
    Canvas.drawImage(sprites.stick, this.position);
}