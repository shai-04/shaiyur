export class Sonic {
    constructor(game) {
        this.game = game;

        this.width = 77;
        this.height = 82;

        this.x = 40;
        this.y = 40;

        this.image = document.getElementById("sonic_spritesheet");
    }

    update(input) {
        if (input.includes("ArrowRight")) this.x += 5;
        else if (input.includes("ArrowLeft")) this.x -= 5;

        if (this.x > this.game.width) this.x = 0 - this.width;
        else if (this.x + this.width < 0) this.x = this.game.width;
    }

    draw(ctx) {
        // ctx.fillStyle = "blue";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        // ctx.drawImage(this.image, this.x, this.y, 320, 240);
        // ctx.drawImage(this.image, this.x, this.y);
        ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}