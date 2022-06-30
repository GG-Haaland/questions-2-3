// I wasn’t too familiar with grids but, after doing some research on stack overflow and some other sources, this one made a lot more sense to me.
// Runtime and memory could be better but ill be looking at ways to simplify my code to make it run more efficiently


var countServers = function (grid) {
     // storing the comunicating servers as count
    let count = 0;
    // split the grin into row and col
    let serverMap = {
        row: {},
        col: {}
    };
    
	// building map
    for (let x = 0; x < grid.length; x++) {
        let row = grid[x];
        
        for (let y = 0; y < row.length; y++) {
            let cell = grid[x][y];
            
            if (!cell) continue; // count remains at 0 
            
            // store the number of servers in each row
            if (serverMap.row[x]) {
                serverMap.row[x]++;
            } else {
                serverMap.row[x] = 1;
            } 
             // store the number of servers in each col
            if (serverMap.col[y]) {
                serverMap.col[y]++;
            } else {
                serverMap.col[y] = 1;
            }
        }
    }
    
	// count servers using map
    for (let x = 0; x < grid.length; x++) {
        let row = grid[x];
        
        for (let y = 0; y < row.length; y++) {
            let cell = grid[x][y];
            
            if (!cell) continue;
            
            // row has more than two servers
            if (serverMap.row[x] && serverMap.row[x] > 1) {
                count++;
                continue;
            }
            
            // col has more than two servers
            if (serverMap.col[y] && serverMap.col[y] > 1) {
                count++;
                continue;
            }
        }
    }
    
    return count;
};

// Runtime: 114 ms, faster than 53.40% of JavaScript online submissions for Count Servers that Communicate.
// Memory Usage: 46.2 MB, less than 59.22% of JavaScript online submissions for Count Servers that Communicate.