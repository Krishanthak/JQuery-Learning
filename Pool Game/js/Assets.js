let sprites = {};
let assetesStillLoading = 0;

function assetsLoadingLoop(callback) {
    if(assetesStillLoading) {
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
    } else {
        callback();
    }
}

function loadAssets(callback) {
    function loadSprite(fileName) {
        assetesStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + fileName;

        spriteImage.onload = function() {
            assetesStillLoading--;
        }

        return spriteImage;
    }
    sprites.background = loadSprite('spr_background4.png');
    sprites.stick = loadSprite('spr_stick.png');

    assetsLoadingLoop(callback);
}