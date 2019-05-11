function Bullet(x, y) {
    this.x = x;
    this.y = y;
    this.deleteBullet = false;

    this.show = () => {
        image(bulletImg, this.x, this.y);
    }

    this.move = () => {
        this.y -= 2;
    }

    this.hits = enemy => {
        var d = dist(this.x, this.y, enemy.x, enemy.y);
        if (d < 35) {
            return true;
        } else {
            return false;
        }
    }

    this.removeBullet = () => {
        this.deleteBullet = true;
    }

}