import {Sonic} from './sonic.js'
import {Input} from './input.js'

window.addEventListener('load', function() {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    canvas.width = 640;
    canvas.height = 480;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;

            this.input = new Input();
            this.sonic = new Sonic(this);
        }

        update() {
            this.sonic.update(this.input.keys);
        }

        draw(ctx) {
            this.sonic.draw(ctx);
        }
    }

    const game = new Game(canvas.width, canvas.height);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();
});