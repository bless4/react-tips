
###State vs statless component
A functional(a.k.a. stateless) component is just a plain javascript function which takes props as an argument and returns a react element.A stateless component has no state(obvious, isn’t it?), it means that you can’t reach `this.state` inside it. It also has no lifecycle so you can’t use componentDidMount and other hooks.
A functional component has no state, no lifecycle methods and it’s easy to write(plain function), a class component has state, lifecycle methods and React creates an instance of a class component every time React renders it. If you don’t need to use state or lifecycle I would recommend you to use a function component, but If there’s a chance that you need one of those things(state, lifecycle methods) I would suggest you to use class component.
# React HOOK
React hook solve the problem of setting useState to functional components.
#manipulating the state
watch Max ad the age of marry after clicking the button
setState is use to change the state by manipulating the DOM
****if state changes all props changes!
***setState can only be use in class based component!***
#React Event
In this excise, open your chrome after the react load,  go to inspect and click the button.
you will see " button was click" plus the number of times clicked. take note.. an event have a name and a property
#React Events
There are many kinds of event in react read more on:-
https://reactjs.org/docs/events.html#supported-events
## Props and state
 Props and state are CORE concepts in React. Actually, only changes in the props and or state can trigger React to 
 Re-render your components and potentially update the DOM in the browser 
 ##Props
 Props allow you to pass data from a parent (Wrapping) component to the child (embedded) component.
## Summary of React Component.
React component uses jsx not standard html elements.
You name classes as className for the purpose of styling.
JSX only accept one 'root' element.
ES6 is the best practices for efficient component coding in react so that it can accept 'this' KEYWORD.
A created component should have an import and export.
Components are the core building block of react app.
Components can be written in two ways:- Functional and class based components.
The class base component is some time refers to as 'container', 'smart', or 'stateful' component.
The advantage of component is tht we can reused component many times without  rewriting the code.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
#react-tips
