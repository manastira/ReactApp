// import React from "react"

// class TodoItem extends React.Component {
//   render() {
//     return <li>{this.props.todo.title}</li>
//   }
// }

// export default TodoItem

import React from "react"

function TodoItem(props) {
  return (
  <div>
    <input type="checkbox"
     checked={props.todo.completed}
     onChange={() => props.handleChangeProps(props.todo.id)}
      /> {props.todo.title}
  </div>
  )
}

export default TodoItem