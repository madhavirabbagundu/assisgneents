/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    var count = 0;
    
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length; j++){
            if(grid[i][j]===i&& grid[i][j]===j){
                // if(i === j){
                count++
                // }
            }
        }
    }
    return count;
};