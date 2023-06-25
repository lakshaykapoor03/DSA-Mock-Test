function Queue() {
  const queue = [];

  function enqueue(element) {
    queue.push(element);
  }

  function dequeue() {
    if (isEmpty()) {
      return "Queue is empty. Cannot perform dequeue operation.";
    }
    return queue.shift();
  }

  function isEmpty() {
    return queue.length === 0;
  }

  return {
    enqueue,
    dequeue,
    isEmpty
  };
}

// Example usage:
const queue = Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
console.log(queue.dequeue()); // Output: 5
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 15
console.log(queue.isEmpty()); // Output: true
console.log(queue.dequeue()); // Output: Queue is empty. Cannot perform dequeue operation.
