function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.xdir = 1;

    this.show = () => {
        image(enemyImg, this.x, this.y);
    }

    this.move = () => {
        this.x += this.xdir;
    }

    this.shiftDown = () => {
        this.xdir *= -1;
        this.y += 2;
    }
}