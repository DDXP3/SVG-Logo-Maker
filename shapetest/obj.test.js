const { describe } = require('node:test');
const {Shape, Circle, Triangle, Square} = require('../obj');

describe('Shape Color', () => {
    describe('Circle color', () => {
        test('should return the line of code of the new circle', () => {
            const newCircle = new Circle ('SNL', 'white','blue');
            newCircle.setShaCol('red');
            expect(newCircle.render()).toEqual(`<circle cx="${newCircle.cx}" cy="${newCircle.cy}" r="${newCircle.r}" fill="${newCircle.shapeColor}"/>`);
        })
    })
    describe('Triangle color', () => {
        test('should return the line of code of the new triangle', () => {
            const newTriangle = new Triangle ('SNL', 'white','blue');
            newTriangle.setShaCol('red');
            expect(newTriangle.render()).toEqual(`<polygon points=${newTriangle.points} fill=${newTriangle.shapeColor}/>`);
        })
    })
    describe('Square color', () => {
        test('should return the line of code of the new square', () => {
            const newSquare = new Square ('SNL', 'white','blue');
            newSquare.setShaCol('red');
            expect(newSquare.render()).toEqual(`<rect x=${newSquare.x} y=${newSquare.y} width=${newSquare.width} height=${newSquare.height} fill=${newSquare.shapeColor}/>`);
        })
    })
})
