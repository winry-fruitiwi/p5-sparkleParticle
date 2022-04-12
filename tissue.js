class Tissue extends Particle {
    constructor(x, y) {
        super(x, y)

        this.vel = p5.Vector.random2D().mult(0.3)

        // width of tissue
        this.width = random(5, 10)

        // height of tissue
        this.height = random(2, 4)

        // last random value
        this.lastValue = noise(this.pos.x, this.pos.y) - 0.5

        // frame when tissue was created
        this.creationFrame = frameCount
    }


    // display confetti as rotating square
    show() {
        push()

        noStroke()

        translate(this.pos.x, this.pos.y)
        rotate(sin(frameCount/30)*0.5)

        fill(this.hue, 30, 100, this.lifetime)

        if (this.isFinished()) {
            strokeWeight(1)
            stroke(random(360), 100, 100)
        }

        rect(0, 0, this.width, this.height)

        // let wind = ((noise(this.pos.x, this.pos.y) - 0.5) + this.lastValue)/4
        let wind = sin((frameCount)/30)*0.015

        this.lastValue = wind

        this.applyForce(new p5.Vector(wind, 0))

        pop()
    }

    applyForce(force) {
        let forceCopy = force.copy().mult(0.5, 0.2)
        this.acc.add(forceCopy)
    }
}
