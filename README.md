# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This personal portfolio website was made following this [tutorial by PedroTech](https://www.youtube.com/watch?v=x7mwVn2z3Sk&ab_channel=PedroTech). 

This is my first personal project involving React, Javascript, HTML, and CSS. My intentions with following this tutorial was to gain basic knowledge and hands-on practice with React, and familiarize myself with web development. This md acts as my own "lecture notes" and a document to keep track of my progress.

## Sat, Aug. 5, 2023 - (25:18 - 32:47)
* Created this md - thus no record of previous components made (initialization of Navbar).
* Imported useState from React to keep track of ReorderIcon state in the responsive mobile form. expandNavbar initially set to false, and then is changed states based on the onClick function which switches its state.
* Imported useEffect from React for a better UX experience. It ensures that the navbar closes automatically (as the state is set to false), whenever the location (hook) changes.
  
### _**Topics covered / learned:**_ 
  * Introduction to [React hooks](https://react.dev/reference/react). (useState, useLocation, useEffect).
  * Implementation of onClick state function logic for navbar.

## Thu, Aug. 10, 2023 - (32:47 - 41:47)
* Initialized Footer.js and Footer.css
* Initialized Home.js page base -- still need to fill in and add in the css.

### _**Topics covered / learned:**_
  * The purpose of a footer: summarize links, copyright, etc.
  * Footer is similar setup to navbar, with use of materialui SvgIcon components.
  * Learned the components / basic structure of a home page. Getting more familiar with JS syntax and overall code structure and logic. 

## Fri, Aug 11. 2023 - (41:47 - 53:00)
  * Implemented Home.css style sheet.
  * Imported VerticalTimeline and VerticalTimelineElement from React for Experience.js page. Working through the Experience.js page helped me get more familiar with react elements and how useful they can be for web design. 
  * Customized Home.js - this proved difficult because even after following the tutorial, branching out on my own and experimenting took a lot of time, effort, and research. I wanted to align my introduction on the left side, but not at the border of the page. So I added a left padding, but then that presented a x-scroll issue which I did not want. It took a while before I read and realized that making the scroll hidden was possible. This might not be the best solution for this problem, but it is my solution as a beginner and as someone who is still learning, and visually, it works for now. 

### _**Topics covered /learned:**_
  * Flex display and its properties, from [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties). We use column flex direction to style the home page text top to bottom, like a column.
  * [@media rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.php) in CSS style sheets to act as breakpoint for device / viewport dimensions. In our case, [insert github code link here for Home.css example](), this changes the home style properties when the screen is less than 600px.
  * [React vertical timeline elements](https://www.npmjs.com/package/react-vertical-timeline-component) - the whole Experience.js page used this component, which emphasizes the convenience and accessibility of React library to create these web designs.
  * **_Goal and aspiration for future website redesign / second website project (longer and a bit more advanced than this current one): [ReactJS Portfolio Website](https://www.youtube.com/watch?v=3aCoZudPEKE&ab_channel=CrypticalCoder)_**


* TODO: finish customizing HOME page, figure out how to add image (svg?) to home page. add short about me in home page. and then do projects page.

* used [ReactJS Portfolio Website](https://www.youtube.com/watch?v=3aCoZudPEKE&ab_channel=CrypticalCoder)_** 38:49 to help with inputting images. Now just need to move to right side.
