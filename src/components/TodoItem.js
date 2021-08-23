import React from "react"
import styles from "./TodoItem.module.css"

// FUNCTION COMPONENT doesn`t need render method, inject props,more easier 
// function TodoItem(props) {



//   const { completed, id, title } = props.todo

//   const completedStyle = {
//     fontStyle: "italic",
//     color: "#595959",
//     opacity: 0.4,
//     textDecoration: "line-through",
//   }
//   render(){
//     return (

//     <li className={styles.item}>
   
//       <input 
//       type="checkbox"
//       className={styles.checkbox}
//       checked={completed}
//       onChange={() => props.handleChangeProps(id)}
//         /> 
//       <button onClick={() => props.deleteTodoProps(id)}>
//         Delete 
//       </button>
    

//       <span style={completed ? completedStyle : null}>
//         {title}
//         </span>
     
//     </li>
//     )
//   }
// }



class TodoItem extends React.Component{
  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }
  
  state = {
    editing: false,
  }
  render(){
    const { completed, id, title } = this.props.todo
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
            
                  <input 
                  type="checkbox"
                  className={styles.checkbox}
                  checked={completed}
                  onChange={() => this.props.handleChangeProps(id)}
                    /> 
                  <button onClick={() => this.props.deleteTodoProps(id)}>
                    Delete 
                  </button>
                
            
                  <span style={completed ? completedStyle : null}>
                    {title}
                    </span>
          </div>
              <input 
              type="text"  
              value={title}
              className={styles.textInput}
              style={editMode} 
              onChange={e => {
                this.props.setUpdate(e.target.value, id)
              }}
              />
          </li>
    )
  }
}

export default TodoItem