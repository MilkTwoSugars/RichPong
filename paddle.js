class Paddle {
    constructor(isLeft) {
        this.y = height / 2;
        this.w = 50;
        this.h = 100;
        this.ychange = 0;
        this.isLeft = isLeft;

        this.gloatCounter = 0;
        this.gloating = false;

        this.gloats = ["NAILED IT", "NOICE", "I AM THE BEST", "YOU ARE A FOOL", "CHAMPIOOON", "EASAYY", "YOUR PONG IS WEAK", "I IMPRESS MYSELF"];
        this.gloatText = random(this.gloats);

        if (isLeft) {
            this.x = this.w;
        } else {
            this.x = width - this.w;
        }


    }

    update() {
        this.y += this.ychange;
        this.y = constrain(this.y, this.h / 2, height - this.h / 2);
    }

    move(steps) {
        this.ychange = steps;
    }

    show() {
        // rectMode(CENTER);
        // fill("hotpink");
        // rect(this.x, this.y, this.w, this.h);
        if (!this.gloating) {
            if (this.isLeft) {
                image(lpadImg, this.x, this.y, this.h, 100)
            } else {
                image(rpadImg, this.x, this.y, this.h, 100)
            }
        } else {
            if (this.isLeft) {
                image(lpadgloatImg, this.x, this.y, this.h, 100)
            } else {
                image(rpadgloatImg, this.x, this.y, this.h, 100)
            }
        }



        this.gloat();

    }

    gloat() {
        if (this.gloating) {
            if (this.isLeft) {
                text(this.gloatText, this.x + this.w, this.y - this.h / 2);
            } else {
                text(this.gloatText, this.x - this.w * 6, this.y - this.h / 2);
            }
            this.gloatCounter++;

            if (this.gloatCounter > 100) {
                this.gloating = false;
                this.gloatCounter = 0;
                this.gloatText = random(this.gloats);
            }
        }
    }
}