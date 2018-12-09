const STICK_ORIGIN = new Vector2(970, 11);
const STICK_SHOOT_ORIGIN = new Vector2(950, 11);

function Stick(position, onShoot) {
    // this.position = new Vector2(400, 400);
    // this.origin = new Vector2(500, 10);
    this.position = position;
    this.rotation = 0;
    this.origin = STICK_ORIGIN.copy();
    this.power = 0;
    this.onShoot = onShoot;
}

Stick.prototype.update = function() {
    // this.position.x++;
    // Testing...
    // this.position = Mouse.position;

    // if(Mouse.left.pressed) {
    //     console.log("Pressed Left")
    // }
    if(Mouse.left.down) {
        this.increasePower();
    }
    else if(this.power > 0) {
        this.shoot();
    }

    this.updateRotation();
}

Stick.prototype.draw = function() {
    Canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation);
}

Stick.prototype.updateRotation = function() {
    let opposite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x - this.position.x;

    this.rotation = Math.atan2(opposite, adjacent);
}

Stick.prototype.increasePower = function() {
    this.power += 100;
    this.origin.x += 5;
}

Stick.prototype.shoot = function() {
    this.onShoot(this.power, this.rotation);
    this.power = 0;
    this.origin = STICK_SHOOT_ORIGIN.copy();
}