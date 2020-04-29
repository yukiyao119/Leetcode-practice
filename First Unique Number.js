// You have a queue of integers, you need to retrieve the first unique integer in the queue.

// Implement the FirstUnique class:

// FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// void add(int value) insert value to the queue.


// Count: Set/Map
// Unique List: Linked List/List/Queue/Dequeue
// new Map(), map.set(num, count)

var FirstUnique = function(nums) {
  let queue = []
  let map = {}

  for ( let i=0; i<nums.length; i++){
    map[nums[i]] = map[nums[i]]+1 || 1
    queue.push(nums[i]) // adding ele to queue
  }

  this.queue = queue
  this.map = map

};


FirstUnique.prototype.showFirstUnique = function() {
  // console.log(this.queue, this.map)

  while (this.queue.length !== 0 && this.map[this.queue[0]] > 1) { //if count of the first ele is > 1, remove it from the first place
    this.queue.shift() 
  }
  
  if (this.queue.length == 0) return -1 // if queue is empty
  
  return this.queue[0]
}


FirstUnique.prototype.add = function(value) {
  this.map[value] = this.map[value]+1 || 1
  
  if (this.map[value] == 1) {
    this.queue.push(value)
  }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

let nums = [2,3,5,5]
let a = new FirstUnique(nums)
a.showFirstUnique()
a.add(7)
