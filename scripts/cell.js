class Cell {
	constructor(x, y, w, h) {
		this.position = createVector(x, y)
		this.width = w
		this.height = h
		this.subdivided = false
		this.cells = []
	}

	display() {
		if(!this.subdivided) {
			push()
				rectMode(CENTER)
				noFill()
				stroke(255)
				rect(this.position.x, this.position.y, this.width, this.height)
			pop()
		} else {
			this.cells.forEach(c => c.display())
		}
	}

	subdivide() {
		
		if(!this.subdivided) {
			const topLeft = new Cell(this.position.x - (this.width/4), this.position.y - (this.height/4), this.width/2, this.height/2)
			this.cells.push(topLeft)
			const topRight = new Cell(this.position.x + (this.width/4), this.position.y - (this.height/4), this.width/2, this.height/2)
			this.cells.push(topRight)
			const bottomLeft = new Cell(this.position.x - (this.width/4), this.position.y + (this.height/4), this.width/2, this.height/2)
			this.cells.push(bottomLeft)
			const bottomRight = new Cell(this.position.x + (this.width/4), this.position.y + (this.height/4), this.width/2, this.height/2)
			this.cells.push(bottomRight)
			this.subdivided = true

			

		}
	}

	isInsideDomain(x, y) {
		const xMin = this.position.x - (this.width/2)
		const xMax = this.position.x + (this.width/2)
		const yMin = this.position.y - (this.height/2)
		const yMax = this.position.y + (this.height/2)
		if(x >= xMin && x < xMax && y >= yMin && y < yMax) {
			return true
		} else {
			return false
		}
	}
}