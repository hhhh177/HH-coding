
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
  };

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // 栈1倒入栈2
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // 栈1倒入栈2
    // if (!this.stack2.length) {
    //   while (this.stack1.length) {
    //     this.stack2.push(this.stack1.pop())
    //   }
    // }
    // return this.stack2[this.stack2.length - 1]
    const val = this.pop()
    this.stack2.push(val)
    return val
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // if (this.stack1.length || this.stack2.length) {
    //   return false
    // } else {
    //   return true
    // }
  
    return !this.stack1.length && !this.stack2.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */