import assert from 'assert';
import findSquares from '../src/square-finder.js';

console.log("testing!!");

describe('findSquares', () => {
    it('should return squares', () => {
        let squares = findSquares(5,5);
        assert.deepEqual(squares, [
            {x: 0, y: 0, width: 5, height: 5},
        ])
    }) 
});