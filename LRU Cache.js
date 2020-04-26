// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:
// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

// 1. For the Hashtable we will simple use a Javascript object calledcache.
// 2. For the Doubly Linked List we will create our own Data Structure calledrecently.
// 3. Finally we just initialize capacity.

// /**
//  * @param {number} capacity
//  */
var LRUCache = function(capacity) {
  class Node {
    constructor(key, val) {
      this.key = key
      this.val = val
      this.prev = null
      this.next = null
    }
  }

  class DoublyLinkedList {
    constructor() {
      this.head = null
      this.tail = null
      this.length = 0
    }
    unshift(key, val) {
      const node = new Node(key, val)
      if (this.length === 0) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        this.head.prev = node
        this.head = node
      }
      this.length++
      return node
    }
    pop() {
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
        this.length = 0
      } else {
        this.tail = this.tail.prev
        this.tail.next.prev = null
        this.tail.next = null
        this.length--
      }
    }
    remove(node) {
      if (node.next !== null) {
        node.next.prev = node.prev
      } else {
        this.tail = node.prev
      }
      if (node.prev !== null) {
        node.prev.next = node.next
      } else {
        this.head = node.next
      }
      node.next = null
      node.prev = null
      this.length--
      return node
    }
  }

  this.cache = {}
  this.recently = new DoublyLinkedList()
  this.capacity = capacity

};

// /** 
//  * @param {number} key
//  * @return {number}
//  */
LRUCache.prototype.get = function(key) {

  if (this.cache[key]) {
    this.recently.remove(this.cache[key])
    this.cache[key] = this.recently.unshift(key, this.cache[key].val)
    return this.cache[key].val
  } else {
    return -1
  }

};

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
LRUCache.prototype.put = function(key, value) {

  if (this.cache[key]) {
    this.recently.remove(this.cache[key])
    this.cache[key] = this.recently.unshift(key, value)
  } else {
    if (this.recently.length < this.capacity) {
      this.cache[key] = this.recently.unshift(key, value)
    } else {
      delete this.cache[this.recently.tail.key]
      this.recently.pop()
      this.cache[key] = this.recently.unshift(key, value)
    }
  }

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */