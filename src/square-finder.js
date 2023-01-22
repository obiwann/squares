
const width = 70;
const height = 80;

let findSquares = (width, height)=> {
    let squares = [];
    let x = 0;
    let y = 0;

    while(width > 0) {
        if(width >= height) {
            // take height as square size
                squares.push({x, y, 'width': height, 'height': height})
                width -= height;
                x += height;
            } else {
            // take width as sqaure size
                squares.push({x, y, 'width': width, 'height': width})
                height -= width;
                y += width;
            }
    }

    //console.log(squareSize);
    return squares;
}

let squares = findSquares(width, height);
console.log("squares:");
console.log(squares);

export default findSquares;