// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.


var checkStraightLine = function(coordinates) {
  // if coordinates has two elements, return true
  // slope1 for (x1, y1) and (x2, y2) is (y2-y1)/(x2-x1) 
  // slope2 for (x, y) and (x1, y1) needs to be the same as slope1
  // thus (y-y1)/(x-x1) = (y2-y1)/(x2-x1) 
  // avoid dividing zero, use multiplication (y-y1)*(x2-x1) = (y2-y1)*(x-x1)
  
  let x1 = coordinates[0][0], y1 = coordinates[0][1]
  let x2 = coordinates[1][0], y2 = coordinates[1][1]
  // slope = (y2-y1)/(x2-x1) 
  
  for (let i=2; i<coordinates.length; i++){
    const curr = coordinates[i]
    let currX = curr[0], currY = curr[1]
    if (
        (currY-y1) * (x2-x1) !== (y2-y1) * (currX-x1)
    ) return false
  }
  
  return true
  
};

//T.C = O(N) S.C = O(1)