
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
    return squares;
}

export default findSquares;