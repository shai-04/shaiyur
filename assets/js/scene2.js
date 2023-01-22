class Scene2 extends Phaser.Scene {
    constructor() {
        super("Scene2");
    }

    preload () {

    }

    create () {
        this.add.text(20, 20, "Playing the game...", {font: "25px Monospace", fill: "green"})
    }

    update (time, delta) {

    }
}