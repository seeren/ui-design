
export default (color, x, y, size, colorFrom, colorTo) => {

    return `${ color } radial-gradient(circle at ${ x }% ${ y }%, ${ colorFrom } ${ size }%, ${ colorTo } ${ size }%)`

};