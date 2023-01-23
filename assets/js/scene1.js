class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

    preload () {
        // this.load.image("sonic", "assets/images/sonic_sprite.png");
        this.load.spritesheet('sonic', 'assets/images/sonic_sprite.png', { frameWidth: 77.2, frameHeight: 82 });
    }

    create () {
         this.add.text(20, 20, "Sonic waiting animation with spritesheet @ 4fps");

        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("sonic", {start: 0, end: 8, first: 0}),
            frameRate: 4,
            repeat: -1
        });

        var sonic = this.add.sprite(config.width / 2, config.height / 2);
        sonic.setScale(0.9);
        sonic.play("idle");

        // this.sonic = this.add.image(config.width / 2, config.height / 2, "sonic");
        // this.sonic.setScale(0.8, 0.8);
        // this.sonic.flipY = false;
        // this.sonic.flipX = true;
        // this.sonic.setOrigin(0, 0);

        // this.scene.start("Scene2");
    }

    update (time, delta) {
        // this.sonic.angle += 2;
        // this.sonic.x += 5;
        // if (this.sonic.x > config.width) this.sonic.x = 0;
    }
}