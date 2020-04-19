// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input:
// 11110
// 11010
// 11000
// 00000
// Output: 1

// Example 2:
// Input:
// 11000
// 11000
// 00100
// 00011
// Output: 3

/* SOLUTION 1 LOOP + DFS */
const numIslands =  (grid) => {
	let count = 0 
	for(let row = 0; row < grid.length; row++){
	    for(let col = 0; col < grid[row].length; col ++){
	        if(grid[row][col] === '1'){
		        count ++
		        explore(row,col, grid)
            }
        }
    }
    return count
}

// Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
function explore(row, col, grid){
     if (row < 0 || col < 0 || row >= grid.length  
         || col >= grid[row].length || grid[row][col] === '0')  {
        return
    }
    
    grid[row][col]='0'

	explore(row, col+1, grid)   
	explore(row, col-1, grid)  
	explore(row+1, col, grid) 
	explore(row-1, col, grid)   

}