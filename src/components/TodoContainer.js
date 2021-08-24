import React from "react"
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import '../../src/App.css';
class TodoContainer extends React.Component {

    state = {
        todos: []
       };
// submit and add new checkbox + title 
       addTodoItem = title => {
         if(title){
          const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          });
        }
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

//filter the list (delete)
      delTodo = id => {
        this.setState({
          todos: [...this.state.todos.filter(todo => {return todo.id !== id})]       
        });  
      };
//edit/update title
      setUpdate = (updatedTitle, id) => {
        this.setState({
          todos: this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          }),
        })
      }
 //retrive data from API, the methos calls after render and before set DOM 
      componentDidMount() {
       const data = JSON.parse(localStorage.getItem("todos"))
        if(data){
          //if call setSDtate in DidMount call twice render()
          this.setState({todos:data})
        }
        else
        {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=100")
          .then(response => response.json())
          .then(data => this.setState({ todos:data}) );
        }
      }
// call method immediately after DidMount 
      componentDidUpdate(prevProps, prevState) {
        debugger;
        // update logic here
        if(prevState.todos !== this.state.todos) {
          // logic here
          localStorage.setItem("todos",JSON.stringify(this.state.todos))
        }
      }
// destroy delete data
      componentWillUnmount() {
        console.log("Cleaning up...")
      }
  render() {
    return (
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={this.addTodoItem} />
            <TodosList 
             todos = {this.state.todos}
             handleChangeProps={this.handleChange}
             deleteTodoProps={this.delTodo}
             setUpdate={this.setUpdate}
            />
            </div>
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

