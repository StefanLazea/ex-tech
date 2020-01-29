class Shape{
	constructor(dimensions){
		this.dimensions = dimensions
	}
	area(){
		// TODO
	}
}

// TODO: Square, Circle, Rectangle

const app = {
  Shape: Shape,
  Square : Square,
  Circle : Circle,
  Rectangle : Rectangle
}

module.exports = app