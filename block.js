class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.color = 70;
  }

  display() {
    noFill();
    stroke(this.color);
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    if (this.angle > 0 && this.angle < 45) {
      this.drawRect();
    } else {
        this.drawX();
    }
    pop();
  }

  move() {
    let distance;
    // if the mouse is moving, check the distance between mouse loc and center of the square 
    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
        distance = dist(mouseX, mouseY, this.x, this.y);
        if (distance < distMouse) {
            this.angle += 1;
            this.color = 255;
        }  
    }
    // if squares are already rotating, keep rotating until angle = 90
    if (this.angle > 0 && this.angle < 90) {
        this.angle += 1;
        if (this.color > 70) this.color -= 3;
    } else {
        this.angle = 0;
        this.color = 70;
    }
  }

  drawRect() {
    rect(0, 0, size - gap, size - gap);
  }

  drawX() {
    let margin = -size/2
    line(margin + gap/2, margin + gap/2, margin + size - gap/2, margin + size - gap/2);
    line(margin + size - gap/2, margin + gap/2, margin + gap/2, margin + size - gap/2);
  }
}
