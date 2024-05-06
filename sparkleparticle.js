class SparkleParticle extends Particle {
    constructor(x, y) {
        super(x, y)

        // when was this particle created?
        this.creationFrame = frameCount

        // distance from center to tip of particle
        this.s = 5

        // when the particle reaches a certain lifetime, make it lose width
        this.decreaseSize = 30
    }


    // display as a little star
    show() {
        push()
        translate(this.pos)

        beginShape()

        // draw different vertices at positions in S
        noFill()
        strokeWeight(1)
        stroke(0, 0, 100, this.lifetime)

        vertex(0, this.s)

        // control point base position. this looks the best but there's no
        // mathematical reason for doing this
        let ctrl = sqrt(this.s)/2

        bezierVertex(ctrl, ctrl, /* c1 */ ctrl, ctrl, /* c2 */ this.s, 0 /* anchor */)
        bezierVertex(ctrl, -ctrl, ctrl, -ctrl, 0, -this.s)
        bezierVertex(-ctrl, -ctrl, -ctrl, -ctrl, -this.s, 0)
        bezierVertex(-ctrl, ctrl, -ctrl, ctrl, 0, this.s)

        // for reference
        //
        // vertex(0, this.s)
        // vertex(this.s, 0)
        // vertex(0, -this.s)
        // vertex(-this.s, 0)
        // vertex(0, this.s)

        endShape()
        pop()
    }


    // update particle
    update() {
        // when we update, we also update the lifetime.
        this.lifetime -= random(0.1, 2)

        this.pos.add(this.vel)
        this.vel.add(this.acc)
        // the same as this.acc = new p5.Vector()
        this.acc.mult(0)

        // particle's center to tip distance changes like a square root
        if (this.lifetime < 50)
            this.s -= .2
        else
            this.s += .2
    }
}
