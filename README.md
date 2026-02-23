## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANS: 
1.getElementById()

#Selects an element using its ID
#Returns only one element
#ID must be unique
#Returns null if not found


2.getElementsByClassName()

#Selects elements using class name
#Returns an HTMLCollection
#Can return multiple elements
#It is a live collection (updates automatically if DOM changes)


3.querySelector()

#Uses CSS selector
#Returns first matching element only
#More flexible (can use id, class, tag, attribute)


4️.querySelectorAll()

#Uses CSS selector
#Returns all matching elements
#Returns a NodeList
#It is not live (static list)


### 2. How do you create and insert a new element into the DOM?
ANS: To create and insert a new element into the DOM, we use:
Step 1: Create the element
Use document.createElement()
Step 2: Add content or attributes
newDiv.innerText = "Hello World";
newDiv.className = "box";
Step 3: Insert it into the DOM
appendChild()
Adds element at the end 


### 3. What is Event Bubbling? And how does it work?
ANS: Event Bubbling : Event Bubbling is a DOM event mechanism where an event starts from the target element and then bubbles up to its parent, then grandparent, and continues up to the document.

 *When you click on a child element:

#Event triggers on the child
#Then it moves to the parent
#Then to the grandparent
#Then to body
#Finally to document


### 4. What is Event Delegation in JavaScript? Why is it useful?
ANS: Delegation : is a technique where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements.

 #Why is it Useful:

1️. Improves performance (less memory usage)
2️. Works for dynamically added elements
3️. Cleaner and shorter code
4️. Easier to maintain 


### 5. What is the difference between preventDefault() and stopPropagation() methods?
ANS: preventDefault() : Stops the default browser behavior of an element.
stopPropagation() : Stops event movement .


