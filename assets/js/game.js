const config = {
    type: Phaser.AUTO,
    parent: "game",
    width: 640,
    height: 480,
    background: 0x000000,
    scene: [Scene1, Scene2]
}

let game = new Phaser.Game(config);