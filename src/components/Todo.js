import React from "react";

const Todo = (props) => {

const {
    item,
    deleteTodo,
    setIsEdit,
    setWillUpdateTodo,
    setTodoText,
    changeIsDone
     } =   props



    return(

        <div className="ms-5 ps-5 "> 
        <div   className={` ms-1 alert bg-${item.isDone === false ? "secondary" : "success"}
        text-${item.isDone === false ? "white" : "black"}
         d-flex justify-content-between align-items-center`} >
                                         <p className="mt-2" style={{fontSize:"20px"}}>{item.text}</p> 
        
        
        <div>
        <button onClick={() => deleteTodo(item.id)}
        className="btn btn-sm btn-danger">Delete</button>
        <button onClick={() => {
          setWillUpdateTodo(item.id)
          setIsEdit(true)
          setTodoText(item.text)
        }}
        className="btn btn-sm btn-success btn-outline-dark mx-1">Edit</button>
        <button onClick={() => changeIsDone(item.id)}
        className={`btn btn-sm btn-${item.isDone === false ? "info" : "dark"}`}>
          {item.isDone === false ? "Done" : "Undone"}
          </button>
        </div>
        
        </div>
        </div>


    )


}

export default Todo;