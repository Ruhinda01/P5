

class Block {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.angle = 0;
      this.speed = 0.5;
      this.color = color(245, 236, 205);
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        stroke(this.color);

        // check THE ANGLE
        if (this.angle > 0 && this.angle < 45) {
            this.drawCircle();
        } else {
            this.drawPlus();
        }
        pop();
    }

    move() {
        // need to look at the prev mouse position and the new /current mouse position
        let distance;
        if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
            distance = dist(mouseX, mouseY, this.x, this.y);
            if (distance < distMouse) {
                this.angle += this.speed;
            }
        }
        // if the block is already rotating, keep it rotating until angle = 90
        if (this.angle > 0 && this.angle < 90) {
            this.angle += this.speed;
        } else {
            this.angle = 0;
        }
        
    }

    drawCircle() {
        fill(118, 176, 65);
        noStroke();
        circle(0, 0, size - gap);
    }

    // drawX() {
    //     let margin = -size / 2;
    //     line(margin + gap/2, margin + gap/2, size + margin - gap/2, size + margin - gap/2);
    //     line(size + margin - gap/2, margin + gap/2, margin + gap/2, size + margin - gap/2);
    // }

    drawPlus() {
        let margin = -size / 2;
        line(size / 2 + margin, margin + gap/2, size / 2 + margin, size + margin - gap/2);
        line(margin + gap/2, size / 2 + margin, size + margin - gap/2, size / 2 + margin);
    }
}