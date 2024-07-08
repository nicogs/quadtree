let grid
function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = new Cell(width/2, height/2, width, height)
}

function draw() {
	background(20);
	grid.display()

}

function mouseClicked() {
	let x = mouseX
	let y = mouseY
	if(grid.isInsideDomain(x,y)) {
		let activeCell = grid
		if(activeCell.subdivided) {
			do{
				const filtered = activeCell.cells.filter(c => c.isInsideDomain(x,y))
				activeCell = filtered[0]
			}while(activeCell.subdivided )
		}
		if(!activeCell.subdivided) {
			activeCell.subdivide()
		}
	}
	
}