# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/design/Screenshot_1.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/johnny064/mobile-first-notification-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanila javaScript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
@media screen and (min-width: 1440px) {
    body{
        transition: 0.5s all ease-out;
    }

    .main-container{
        width:600px;
        font-size: 14px;
        background-color: white;
        border-radius: 5px;
    }

    .not-02{
        padding: 30px;
    }

  }

```
```js
let notification = document.querySelectorAll("#not");

    for(let j=0;j<notification.length;j++){
        notification[j].classList.add("active");
    }
```


### Useful resources

- [W3 school](https://www.w3schools.com/default.asp) - This helped me throughout the project. I really liked this pattern and will use it going forward.

## Author
- Frontend Mentor - [@johnny064](https://www.frontendmentor.io/profile/johnny064)
