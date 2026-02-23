# Job Application Tracker

This is a simple Job Application Tracker built using HTML, CSS, and Vanilla JavaScript.  
The project allows users to manage job applications by marking them as Interviewed or Rejected, filtering jobs using tabs, and deleting job cards.

---

## 🔗 GitHub Repository

https://github.com/atiarahman435/job-application-tracker

---

## 🔗 Live Site

(Add your GitHub Pages link here)

---

## 📌 Features

- Display 8 job cards dynamically
- Mark jobs as Interview or Rejected
- Toggle between Interview and Rejected
- Delete job cards
- Filter jobs using tabs (All / Interview / Rejected)
- Show empty state when no jobs are available
- Dynamic job count update

---

## 🧠 Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- `getElementById()` selects one element using its unique id.
- `getElementsByClassName()` selects multiple elements that share the same class name.
- `querySelector()` selects the first element that matches a CSS selector.
- `querySelectorAll()` selects all elements that match a CSS selector.

`querySelector` and `querySelectorAll` are more flexible because they support full CSS selector syntax.

---

### 2. How do you create and insert a new element into the DOM?

To create a new element:

```javascript
const element = document.createElement("div");
```

To insert it into the DOM:

```javascript
document.body.appendChild(element);
```

We can also use methods like `append()`, `prepend()`, or `insertBefore()` to place elements in different positions inside the DOM.

---

### 3. What is Event Bubbling? And how does it work?

Event Bubbling is a process where an event starts from the target element and then moves upward through its parent elements.

For example, if a button is inside a div and we click the button, the event first happens on the button, then bubbles up to the div, and then to the body element.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where we attach a single event listener to a parent element instead of attaching multiple listeners to each child element.

It is useful because:

- It improves performance.
- It works for dynamically created elements.
- It keeps the code cleaner and easier to manage.

In this project, event delegation is used to handle Interview, Rejected, and Delete button clicks.

---

### 5. What is the difference between preventDefault() and stopPropagation()?

- `preventDefault()` prevents the default browser behavior. For example, stopping a form from submitting automatically.
- `stopPropagation()` stops the event from bubbling up to parent elements.

Both methods control how events behave in JavaScript, but they serve different purposes.

---

## 💻 Technologies Used

- HTML
- CSS
- Vanilla JavaScript