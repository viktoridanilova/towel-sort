
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (!arguments.length) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
        arr = [...arr, matrix[i]]
        }
        else {
           arr = [...arr, matrix[i].reverse()];
        } 
    }
    
  return arr.flat();
}
