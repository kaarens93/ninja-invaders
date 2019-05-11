var player;
var enemies = [];
var bullets = [];
var enemyImg;
var playerImg;
var bulletImg;

function preload() {
    enemyImg = loadImage("images/scaredy.png");
    playerImg = loadImage("images/ninja.png");
    bulletImg = loadImage("images/sushi.png");
}

function setup() {
    createCanvas(600, 400);
    player = new Player();
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 4; j++) {
            var enemy = new Enemy(i*50 + 75, j*50 + 50);
            enemies.push(enemy);
        }
    }
}

function draw() {
    background(50);
    player.show();
    player.move();
    var edge = false;
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].show();
        enemies[i].move();
        if (enemies[i].x > width - 30 || enemies[i].x < 0) {
            edge = true;
        }
    }

    if (edge) {
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].shiftDown();
        }
    }

    for (var i = 0; i < bullets.length; i++) {
        bullets[i].show();
        bullets[i].move();
        for (var j = 0; j < enemies.length; j++) {
            if (bullets[i].hits(enemies[j])) {
                enemies.splice(j, 1);
                bullets[i].removeBullet();
            }
        }
    }

    for (var i = bullets.length-1; i >= 0; i--) {
        if (bullets[i].deleteBullet) {
            bullets.splice(i, 1);
        } 
        else if (bullets[i].y < 0) {
            bullets.splice(i, 1);
        }
    }
}

function keyPressed() {
    if (keyCode === 39) {
        // player.move('right');
        player.setDir(1);
    } 
    else if (keyCode === 37) {
        // player.move('left');
        player.setDir(-1);
    } 
    else if (keyCode === 32) {
        var bullet = new Bullet(player.x, height-75);
        bullets.push(bullet);
    }
}

function keyReleased() {
    if (keyCode != 32) {
        player.setDir(0);
    }
}