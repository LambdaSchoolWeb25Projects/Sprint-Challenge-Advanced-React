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