// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 

// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.


/* SOLUTION 1 USE STACK */
// var MinStack = function() {
//   this.count = 0
//   this.storage = {}
// };

// MinStack.prototype.push = function(x) {
//   this.storage[this.count] = x
//   this.count++
// };

// MinStack.prototype.pop = function() {
//   if(this.count === 0) {
//       return undefined
//   }
//   this.count--
//   let result = this.storage[this.count]
//   delete this.storage[this.count]
//   return result
// };

// MinStack.prototype.top = function() {
//    return this.storage[this.count-1]
// };

// MinStack.prototype.getMin = function() {
//   let min = this.storage[0]
//   for (let k of Object.keys(this.storage)) {
//     if (this.storage[k] <= min){
//         min = this.storage[k]
//     }
//   }
//   return min
// };


/* SOLUTION 2 TIME O(1), FIND MIN ON EVERY ARRAY ELEMENT */
var MinStack = function() {
  this.elements = [];
};

MinStack.prototype.push = function(x) {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
  });
};

MinStack.prototype.pop = function() {
  this.elements.pop();
};

MinStack.prototype.top = function() {
  return this.elements[this.elements.length - 1].value;
};

MinStack.prototype.getMin = function() {
  return this.elements[this.elements.length - 1].min;
};


let minStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
minStack.getMin();
minStack.pop();
minStack.getMin();
minStack.pop();
minStack.getMin();
minStack.pop();
minStack.getMin();