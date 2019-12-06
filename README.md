# Sprint Challenge: Advanced React - Women's World Cup

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored class components, custom hooks, and testing. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that consumes data from an API using a custom hook, displays that data on the DOM, and tests your React components.

The data you will get back from the server will be the Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide - https://googletrends.github.io/data/.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the `ANSWERS.md` file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Why would you use class component over function components (removing hooks from the question)?

It boils down to this functional components are used to create UI and presentation such as buttons but do not manage state. Class components manage state and logic. 

Components are created (mounted on the DOM), grow by updating, and then die (unmount on DOM). This is referred to as a component lifecycle.

By creating components as classes, you can set up a data object that your component is concerned with. This is done using state and setting up that object on our constructor method. Once we have some data that we can render out to the DOM, we need a vehicle that will allow us to render that data. This is achieved with the JSX method render() from within the life-cycle hook.
Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword. Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.

React lifecycle methods (for example, componentDidMount) cannot be used in functional components.

There is no render method used in functional components.
These are mainly responsible for UI and are typically presentational only (For example, a Button component).
Functional components can accept and use props. Functional components should be favored if you do not need to make use of React state.

Class components make use of ES6 class and extend the Component class in React. Sometimes called “smart” or “stateful” components as they tend to implement logic and state.
React lifecycle methods can be used inside class components (for example, componentDidMount). You pass props down to class components and access them with this.props

- [ ] Name three lifecycle methods and their purposes.

Constructor: Setting up state, creating refs and method binding
componentDidMount: Starting AJAX calls to load in data for your component
componentWillUnmount: Cleaning up any leftover debris from your component

- [ ] What is the purpose of a custom hook?

With custom hooks, you are building the hook yourself to apply non-visual behavior and stateful logic throughout your components. This way, you can reuse the same hook over and over again. Custom hooks follow the same patterns of naming (i.e. prefacing the function name with use, as in useState). You can build a reusable custom hook for anything from handling controlled inputs, to managing event listeners, or watching for key presses.

- [ ] Why is it important to test our apps?

We should not wait until a feature is complete to start testing it. However, testing software manually on every commit to source control or every time we make a change does not scale! Automated testing works by using software to test our code.
Automated testing minimizes the risk of bugs finding their way into production code. Testing is NOT optional. Testing should be a part of every developer’s workflow. A feature is not done until it is fully tested! The costs long term can become enormous and surpass hundreds of times over any marginal time gains obtained by not writing tests. Eventually, entire teams of developers can get so bogged down in bugs and regressions that the product can’t move forward.
Test how the code  is used not the code!

Kinds of Tests
Unit Testing
Integrated Testing
End to End Testing

What to test - Test the user experience!

Start with a Code Coverage test - tells you what needs testing

Use Case Coverage
Lifecycle methods
Element event handlers
Internal Component State
User interactions 
(using fireEvent from React Testing Library): Is the end user able to interact with the elements that the component renders?

Changing props 
(using rerender from React Testing Library): What happens when the developer user re-renders your component with new props?

Context changes 
(using rerender from React Testing Library): What happens when the developer user changes context resulting in your component re-rendering?

Subscription changes: 
What happens when an event emitter the component subscribes to changes? (Like firebase, a redux store, a router, a media query, or DOM-based subscriptions like online status)

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Run `yarn` to download dependencies.
- [ ] Run the server using `yarn start` or `node server.js`.
- [ ] In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
- [ ] Still inside the `client` folder run `yarn start` to run the client application.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`
- [ ] Display the player data you receive from the API
- [ ] Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
- [ ] Write a "reasonable" amount of unit tests for your React components. What does "reasonable amount" mean? That is up to you to decide. Be ready to defend your choice to your TL 👍

## Stretch Problems

- [ ] Implement another custom hook
- [ ] Use a graphing library to graph the data you received from the API
