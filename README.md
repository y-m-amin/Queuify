#Question answers

1. JSX stands for JavaScript XML. It allows writing HTML-like code inside JavaScript. 

2. State: Data that belongs to a component and can change over time (managed inside the component).

   Props: Data passed into a component from its parent. Props are read-only and cannot be changed by the child component.

3. useState is a React hook that adds state to functional components. It returns an array with two values: [The current state value, A function to update the state]
   When the state updates, React re-renders the component.

4. You share state by lifting it up to the nearest common parent. The parent holds the state and passes it down to children using props. 

5. Events in React are written in camelCase (e.g., onClick, onChange).  a function is passed as the event handler, usually defined inside the component.  for example- <button onClick={ () => handleClick() }>Click Me</button>
"# Queuify" 
