import React from "react"
import TodosList from "./TodosList";
import Header from "./Header";
class TodoContainer extends React.Component {

    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };





  render() {
    return (
        <div>

            <Header />

            <TodosList todos = {this.state.todos}></TodosList>
        </div>

//       <ul>
//           {this.state.todos.map(todo => {

//               <li>{todo.title} </li>
//           })}
// {/* 
//         <input type="checkbox" checked="{true}" />
//         <h1>Hello from Create React App</h1>
//         <p>I am in a React Component!</p> */}
//       </ul>
    );
  }
}
export default TodoContainer

