1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   getElementById finds one element by its ID.
   getElementsByClassName finds multiple elements by their class, returning a live list.
   querySelector finds the first element matching any CSS selector.
   querySelectorAll finds all elements matching any CSS selector, returning a static list.

2. How do you create and insert a new element into the DOM?
   Create: document.createElement('div')
   Insert: parentElement.appendChild(newElement)

3. What is Event Bubbling and how does it work?
   Event Bubbling is the process where an event starts from the target element and propagates upward through its ancestor elements in the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?
   Event Delegation is attaching a single event listener to a parent element to handle events on its children.
   It is useful for efficiency (fewer listeners) and for handling dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
   preventDefault() stops the browser's default behavior for an event (e.g., a link navigation).
   stopPropagation() stops the event from bubbling up the DOM tree to parent elements.
