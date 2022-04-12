class SparkleParticle extends Particle {
    constructor(x, y) {
        super(x, y)

        // when was this particle created?
        this.creationFrame = frameCount

        // distance from center to tip of particle
        this.s = 0

        // maximum distance from center to control point of Bézier curve
        this.controlDistanceMax = 1
    }


    // display as a square for now
    show() {
        push()
        translate(this.pos)

        beginShape()

        // draw different vertices at positions in S
        noFill()
        strokeWeight(1)
        stroke(0, 0, 100, this.lifetime)

        vertex(0, this.s)
        vertex(this.s, 0)
        vertex(0, -this.s)
        vertex(-this.s, 0)
        vertex(0, this.s)

        endShape()
        pop()
    }


    // update particle
    update() {
        super.update()

        // particle's center to tip distance changes like a square root
        this.s = sqrt(frameCount - this.creationFrame)
    }
}
