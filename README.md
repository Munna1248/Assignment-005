# Assignment-005

1. `getElementById` is used to select a single element by its ID. It returns just one element. `getElementsByClassName` selects all elements with a specific class name and returns a live HTMLCollection, which updates if the DOM changes. `querySelector` selects the first element that matches a CSS-style selector, and `querySelectorAll` returns all matching elements as a static NodeList.

2. To create and insert a new element into the DOM, you use `document.createElement()` to make the element, set its content or attributes, and then use `appendChild()` or `append()` to add it to a parent element. For example, creating a new `<div>` and adding it to the body involves creating the element, setting its text, and appending it.

3. Event bubbling means when an event happens on a child element, it also travels up to its parent, grandparent, and so on. This allows multiple elements to respond to the same event, starting from the deepest target and moving upward through the DOM tree.

4. Event delegation is a technique where you add one event listener to a parent element instead of adding listeners to each child. It works because of event bubbling. You can check which child was clicked using `event.target`. This is useful for performance and for handling elements that are added dynamically.

5. `preventDefault()` stops the browser’s default action, like submitting a form or following a link. `stopPropagation()` stops the event from bubbling up to parent elements. They are often used together when you want full control over what happens during an event.

