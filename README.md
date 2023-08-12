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

  ## Fri, Aug 11. 2023 - (41:47 - )
  * Implemented Home.css style sheet.

  ### _**Topics covered /learned:**_
  * Flex display and its properties, from [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties). We use column flex direction to style the home page text top to bottom, like a column.
  * [@media rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.php) in CSS style sheets to act as breakpoint for device / viewport dimensions. In our case, [insert github code link here for Home.css example](), this changes the home style properties when the screen is less than 600px.