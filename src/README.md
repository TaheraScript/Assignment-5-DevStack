Here is a  description about my project:

a.The name of my project is "Assignment-5-DevStack".

b.A little description about my projrct:
                                        “My project is a React-based technologies data  management application. It loads technologies data from a JSON file, displays the datas using reusable components, and allows  to add datas to stack. I used React concepts such as JSX, props, state, useState, .map(), conditional rendering, and event handling.”

c.Technology that I used in my project are:

1. React.js
2. Tailwind CSS, DaisyUI
3. TypeScript & JavaScript (ES6+)
4. React-Toastify (NPM Package)
5.JSON (for technology data)
6. Vite (build tool) 

d.3 features about my  project are given below:

1.Dynamic Player Data Loading :
Player information is loaded dynamically from a JSON file using useEffect and displayed on the website.
2.Player Selection and Stack Management:
Users can add their preferred players to a personal stack and manage their selected players.
3.Dynamic and Interactive UI:
The project uses React concepts like useState, props, reusable components, .map(), and conditional rendering to update the user interface based on user actions.



**1. What is JSX, and why is it used in React?**
Answer :
        JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.JSX makes React code easier to read and write because we can describe the UI using HTML-like syntax.
 
**2. What is the difference between props and state?**
Answer :
        The main difference between props and state is:

Props	                                         State
Data passed from parent to child	    Data managed inside a component
Read-only	                            Can be changed
Controlled by the parent	            Controlled by the component itself
Used to pass data	                    Used to store changing data


**3. What does the UseState hook do, and where did you use it in this project?**
Answer :
        UseState lets a component remember a value between renders and re-render whenever that value changes.  useState allows a React component to store data and update the UI when that data changes.The useState hook is used to create and manage state in a functional component.

**4. What does the UseEffect hook do, and why did you need it to load the JSON data?**
Answer :
        UseEffect normally  runs code after a component renders — often used for things like fetching data. useEffect is used to perform side effects in a React component.the UseEffect runs when the component initially loads/mounts.

**5. Why does every item in a .map() list need a unique key prop?**
Answer :
        React uses the key to tell items apart when the list changes (adding, removing, reordering). Without a unique key, React can get confused about which item is which, causing bugs or unnecessary re-renders.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Answer :
        Conditional rendering means showing different UI depending on some condition, instead of always showing the same thing. In my project I have a file named YourStack.tsx, here I check if selectedTechs.length === 0 — if true, I show "Your stack is empty," otherwise I show the actual list of added technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Answer :
        A parent passes data down to a child using props — like `<TechDataCard techData={techData} isAdded={isAdded} />`. For a child to send something back up, the parent passes down a function as a prop, and the child calls that function. For example, `Tech.tsx` passes `onAddTech={handleAddTech}` to `TechDataCard`, and when the "Add to Stack" button is clicked, the card calls `onAddTech(techData)` — which runs the parent's function and updates the parent's state.


