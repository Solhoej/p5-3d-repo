class Sphere {
    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.rapidlyApproachingZ = -100;
        this.resetX = random(-50, 50);
        this.speed = 20;
        this.sphereScore = 0;
        this.increaseSpeed = 0;
    }

    update(cameraPosX, cameraPosZ) {
        this.rapidlyApproachingZ += this.speed;
        if (this.rapidlyApproachingZ > cameraPosZ + 100) {
            this.rapidlyApproachingZ = -100;
            this.xPos = cameraPosX;
            this.sphereScore += 1;
        }
        switch (this.sphereScore) {
            case 10:
                if (this.increaseSpeed != 1) {
                    this.speed += 10;
                    this.increaseSpeed = 1;
                }
                break;
            case 30:
                if (this.increaseSpeed != 2) {
                    this.speed += 10;
                    this.increaseSpeed = 2;
                }
                break;
            case 50:
                if (this.increaseSpeed != 3) {
                    this.speed += 10;
                    this.increaseSpeed = 3;
                }
                break;
            case 100:
                if (this.increaseSpeed != 4) {
                    this.speed += 10;
                    this.increaseSpeed = 4;
                }
                break;
            case 150:
                if (this.increaseSpeed != 5) {
                    this.speed += 20;
                    this.increaseSpeed = 5;
                }
                break;
        }
    }

    respawn() {
        this.sphereScore = 0;
    }

    display(sphereTexture) {
        push();
        translate(this.xPos, this.yPos, this.rapidlyApproachingZ);
        rotateY(180);
        texture(sphereTexture);
        sphere(10);
        pop();
    }
}

export { Sphere };