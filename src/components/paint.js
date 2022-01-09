/**
 * Copyright (c) 2019 FarmLead Resources Ltd. All rights reserved.
 */

// lodash
var _ = require('lodash')

// The colors this grid allows
 var COLORS = [
    'red', 
    'blue', 
    'green'
]
exports.COLORS = COLORS

/**
 * Flood fills the given grid by changing the color of the point at x and y
 * 
 * @param {[][]string} grid Grid on which you should implement the flooding algorithm using the color defined at the x and y coordinates given in the x and y args
 * @param {number} x X coordinate
 * @param {number} y Y coordinate
 * @param {string} color New color to fill with using the flood algorithm, will be one of the COLORS
 * @returns {[][]string} Grid array with the implemented flood fill algorithm
 */
function floodFillAt(grid, x, y, color) {
    // TODO 
     x = parseInt(x)
     y = parseInt(y)
    for(let i=0; i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if((i-y)<2 && (y-i)<2){
                if((j-x)<2&&(x-j)<2){
                    if(grid[i][j]){
                        grid[i][j]= color
                    }
                }
            }
        }
    }
        return grid
    }




exports.floodFillAt = floodFillAt

/**
 * Generates a (rowsxcolumns) grid where the color of each point in the grid is randomly selected to be red, blue or green
 * 
 * @param {number} rows Number of rows in this grid
 * @param {number} columns Number of columns in this grid
 * @returns {[][]string} Grid array
 */
function generateRandomGrid(rows, columns) {
    // The 2D array which will be used to store the randomly generated color values
    var grid = []
    // Move row by row and populate each point in the row with a random color
    for(var rowIndex=0; rowIndex<rows; rowIndex++) {
        // Create the array at this row which represents the column
        grid[rowIndex] = []

        // Go through each point in the column
        for(var columnIndex=0; columnIndex<columns; columnIndex++) {
            // Generate the random color for the point at rowIndex,columnIndex
            var colorForCurrentCoord = COLORS[_.random(0, 2)]

            // Set the color
            grid[rowIndex][columnIndex] = colorForCurrentCoord
        }
    }

    // Return the generated grid
    console.log('grid',grid);

    return grid
}

exports.generateRandomGrid = generateRandomGrid
