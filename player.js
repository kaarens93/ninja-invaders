function Player() {
    this.x = width/2;
    this.xdir = 0;

    this.show = () => {
        image(playerImg, this.x, height-55);
    }

    this.move = dir => {
        // if (dir == 'right') {
        //     this.x += 5;
        // } 
        // else if (dir == 'left') {
        //     this.x -= 5;
        // }
        // else if (dir == 'stop') {
        //     this.x;
        // }
        this.x += this.xdir*5;
        this.x = constrain(this.x, 0, 550);
    }

    this.setDir = dir => {
        this.xdir = dir;
    }

}