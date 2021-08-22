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

//enable communication between components
       handleChange = (id) => {
      //  console.log(`clicked ${id}`);
      debugger;
      this.setState(prevState => ({
      
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return { 
             // id:todo.id,
             // title: todo.title, 
             
             ...todo,          //--->  the short exam how to set the object items, otherwise we set completed and lose others values(in this case ID and Title)   
              completed: !todo.completed,
            }
          }
          return todo
        }),
      }))
    }





  render() {
    return (
        <div>
            <Header />
            <TodosList todos = {this.state.todos} handleChangeProps={this.handleChange} ></TodosList>
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

