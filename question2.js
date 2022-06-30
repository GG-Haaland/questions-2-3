// 1296. Divide Array in Sets of K Consecutive Numbers

// This one gave me some issues. For whatever reason I was having a hard putting what was in my head into code. But after digging into it I believe I found a solid solution. 
// 


const isPossibleDivide = (nums, k) => {
// first i want to find out if K can fit into nums.length 
    if (nums.length % k !== 0) return false;

// Start a new Map (doing so will be easier to access the value as an integer)( I also like the functions that come along with using map)
    const map = new Map();
    
// Sorting nums will simplify things when traversing through the array
    nums.sort((a, b) => {
        return a - b
    });

// check for same val
    for (const val of nums) {
      map.set(val, map.has(val) ? map.get(val) + 1 : 1);
    }

// Itterate through our sorted nums  
    for (let i = 0; i < nums.length; i++) {
    // create a new set called count
      const start = nums[i];
      const count = map.get(start);
        if (count === 0) continue;
    // loop through our new sub sets k 
      for (let j = 1; j < k; j++) {
        const c = map.get(start + j)
        if (c === undefined || c < count) return false;
        map.set(start + j, c - count);
      }
      map.set(start, 0);
    }
    return true;
};
  
// Runtime: 218 ms, faster than 87.32% of JavaScript online submissions for Divide Array in Sets of K Consecutive Numbers.
// Memory Usage:  55.6 MB, less than 87.32% of JavaScript online submissions for Divide Array in Sets of K Consecutive Numbers.

