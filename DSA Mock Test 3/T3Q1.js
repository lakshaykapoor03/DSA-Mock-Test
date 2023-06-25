function Stack() {
    const stack = [];
  
    function push(element) {
      stack.push(element);
    }
  
    function pop() {
      if (isEmpty()) {
        return "Stack is empty. Cannot perform pop operation.";
      }
      return stack.pop();
    }
  
    function isEmpty() {
      return stack.length === 0;
    }
  
    return {
      push,
      pop,
      isEmpty
    };
  }
  
  // Example usage:
  const stack = Stack();
  stack.push(5);
  stack.push(10);
  stack.push(15);
  console.log(stack.pop()); // Output: 15
  console.log(stack.isEmpty()); // Output: false
  console.log(stack.pop()); // Output: 10
  console.log(stack.pop()); // Output: 5
  console.log(stack.isEmpty()); // Output: true
  console.log(stack.pop()); // Output: Stack is empty. Cannot perform pop operation.
  