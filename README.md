# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This personal portfolio website was made following this [tutorial by PedroTech](https://www.youtube.com/watch?v=x7mwVn2z3Sk&ab_channel=PedroTech). 

This is my first personal project involving React, Javascript, HTML, and CSS. My intentions with following this tutorial was to gain basic knowledge and hands-on practice with React, and familiarize myself with web development. This md acts as my own "lecture notes" and a document to keep track of my progress.

**Goal and aspiration for future website redesign / second website project (longer and a bit more advanced than this current one): [ReactJS Portfolio Website](https://www.youtube.com/watch?v=3aCoZudPEKE&ab_channel=CrypticalCoder)**

## Sat, Aug. 5, 2023 - (25:18 - 32:47) - Navbar
* Created this md - thus no record of previous components made (initialization of Navbar).
* Imported useState from React to keep track of ReorderIcon state in the responsive mobile form. expandNavbar initially set to false, and then is changed states based on the onClick function which switches its state.
* Imported useEffect from React for a better UX experience. It ensures that the navbar closes automatically (as the state is set to false), whenever the location (hook) changes.
  
### _**Topics covered / learned (1.5+ spent):**_ 
  * Introduction to [React hooks](https://react.dev/reference/react). (useState, useLocation, useEffect).
  * Implementation of onClick state function logic for navbar.

## Thu, Aug. 10, 2023 - (32:47 - 41:47) - Footer and Home Page
* Initialized Footer.js and Footer.css
* Initialized Home.js page base -- still need to fill in and add in the css.

### _**Topics covered / learned (30+ mins spent):**_
  * The purpose of a footer: summarize links, copyright, etc.
  * Footer is similar setup to navbar, with use of materialui SvgIcon components.
  * Learned the components / basic structure of a home page. Getting more familiar with JS syntax and overall code structure and logic. 

## Fri, Aug 11. 2023 - (41:47 - 53:00) - Home Page
  * Implemented Home.css style sheet.
  * Imported VerticalTimeline and VerticalTimelineElement from React for Experience.js page. Working through the Experience.js page helped me get more familiar with react elements and how useful they can be for web design. 
  * Customized Home.js - this proved difficult because even after following the tutorial, branching out on my own and experimenting took a lot of time, effort, and research. I wanted to align my introduction on the left side, but not at the border of the page. So I added a left padding, but then that presented a x-scroll issue which I did not want. It took a while before I read and realized that making the scroll hidden was possible. This might not be the best solution for this problem, but it is my solution as a beginner and as someone who is still learning, and visually, it works for now. 
  * Also input a temporary portrait photo for home page (have to fix formatting).

### _**Topics covered /learned (3.5+ hours spent):**_
  * Flex display and its properties, from [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties). We use column flex direction to style the home page text top to bottom, like a column.
  * [@media rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.php) in CSS style sheets to act as breakpoint for device / viewport dimensions. In our case, [insert github code link here for Home.css example](), this changes the home style properties when the screen is less than 600px.
  * [React vertical timeline elements](https://www.npmjs.com/package/react-vertical-timeline-component) - the whole Experience.js page used this component, which emphasizes the convenience and accessibility of React library to create these web designs.

## Sat, Aug 12. 2023 - Home Page
* Implemented a portrait photo on the right side of the "about" section on the Home page.
  * This required a lot of experimenting and playing around with css formatting, as I split up the "about" blue section of the Home page into a right and left portion in order to have the portrait next to my introduction text.
* Gave links to the social media icons.
* Also experimented with the horizontal `<hr></hr>` line formatting.
* Registered domain name with [AWS Route 53](https://aws.amazon.com/route53/) and registered for [AWS Amplify](https://aws.amazon.com/amplify/) Web Hosting Service.
* Changed Skills section to About Me section with introduction.

### _**Topics covered /learned (6+ hours spent):**_
  * Familiarize self with flex display and flexbot formatting, and general javascript / css parent-child formatting.
  * Implementing images and importing links onto logos / imgs.

