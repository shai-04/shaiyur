let app;
let player;
let keys = {};

window.onload = function() {
    app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x000000
    });

    document.body.appendChild(app.view);

    // Load assets
    loader.add("sonic_spritesheet", "assets/images/sonic_sprite.png");

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    app.ticker.add(gameLoop);
};

function keyDown(e) {
    // console.log(e.keyCode);
    keys[e.keyCode] = true;
}

function keyUp(e) {
    keys[e.keyCode] = false;
}

function gameLoop() {

}

function showProgress(e) {
    console.log("loading " + e.message);
}
function doneLoading(e) {
    console.log("done loading " + e.message);
}
function errorLoading(e) {
    console.log("error " + e.message);
}