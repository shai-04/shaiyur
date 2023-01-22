class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

    preload () {
        this.load.image("sonic", "assets/images/sonic_wait.gif");
    }

    create () {
        this.add.text(20, 20, "Loading game...");
        this.sonic = this.add.image(config.width / 2, config.height / 2, "sonic");
        this.sonic.setScale(0.8, 0.8);
        this.sonic.flipY = false;
        this.sonic.flipX = true;
        // this.sonic.setOrigin(0, 0);

        // this.scene.start("Scene2");
    }

    update (time, delta) {
        // this.sonic.angle += 2;
        this.sonic.x += 5;
        if (this.sonic.x > config.width) this.sonic.x = 0;
    }
}