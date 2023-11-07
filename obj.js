
class Shape {
    constructor(text, textColor, shape, shapeColor){
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.cx = "150",
        this.cy = "100",
        this.r ="80"
    }
    setShaCol(color){
        this.shapeColor = color
    }
    render(){
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.points = "150, 18 244, 182 56, 182"
    }
    setShaCol(color){
        this.shapeColor = color
    }
    render(){
        return `<polygon points=${this.points} fill=${this.shapeColor}/>`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.x="75",
        this.y="25",
        this.width="150",
        this.height="150"
    }
    setShaCol(color){
        this.shapeColor = color
    }
    render(){
        return `<rect x=${this.x} y=${this.y} width=${this.width} height=${this.height} fill=${this.shapeColor}/>`
    }
}

module.exports = Shape