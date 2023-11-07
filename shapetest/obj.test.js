const { describe } = require('node:test');
const {Shape, Circle, Triangle, Square} = require('../obj');

describe('Shape Color', () => {
    describe('Circle color', () => {
        test('should return the line of code of the circle', () => {
            const newCircle = new Circle('SNL', 'white', 'blue');
            newCircle.setShaCol('red');
            expect(newCircle.render()).toEqual(`<circle cx="${newCircle.cx}" cy="${newCircle.cy}" r="${newCircle.r}" fill="${newCircle.shapeColor}"/>`);
        })
    })
})