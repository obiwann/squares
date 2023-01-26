import assert from 'assert';
import findSquares from '../src/square-finder.js';

console.log("testing!!");

describe('findSquares', () => {
    it('should return an array', () => {
        let squares = findSquares(20,20);
        assert.deepEqual(squares, [
            {x: 0, y: 0, width: 20, height: 20},
        ]);
    })
    it('should return one square if width and height are equal', () => {
        let squares = findSquares(20,20);
        assert.deepEqual(squares, [
            {x: 0, y: 0, width: 20, height: 20},
        ]);
    })
    it('should return correct squares', () => {
        let squares = findSquares(20,40);
        assert.deepEqual(squares, [
            {x: 0, y: 0, width: 20, height: 20},
            {x: 0, y:20, width: 20, height: 20},
        ]);
        squares = findSquares(40,20);
        assert.deepEqual(squares, [
            {x: 0, y: 0, width: 20, height: 20},
            {x: 20, y: 0, width: 20, height: 20},
        ]);
        squares = findSquares(14,63);
        assert.deepEqual(squares, [
            {x: 0, y: 0, width: 14, height: 14},
            {x: 0, y: 14, width: 14, height: 14},
            {x: 0, y: 28, width: 14, height: 14},
            {x: 0, y: 42, width: 14, height: 14},
            {x: 0, y: 56, width: 7, height: 7},
            {x: 7, y: 56, width: 7, height: 7},
        ]);
    })
    it('should return no squares if input is zero', () => {
        let squares = findSquares(0,0);
        assert.strictEqual(squares.length, 0);
    })
    it('should return no squares if input is negative', () => {
        let squares = findSquares(-1,-20);
        assert.strictEqual(squares.length, 0);
    })
    it('should return no squares if input is not a number', () => {
        let squares = findSquares('a','b');
        assert.strictEqual(squares.length, 0);
    })
});