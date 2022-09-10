import React from 'react'

const TodoForm = (props) => {

    const {
           handleSubmit,
           todoText,
           setTodoText,
           isEdit
         } = props


  return (
    <form className="mx-5" onSubmit={handleSubmit}>
        <div className=" mx-5 input-group mb-5">
          <input style={{height:"45px" , fontSize:"18px"}}
            value={todoText}
            type="text"
            className="form-control"
            placeholder="Type your todo"
            onChange={(event) => setTodoText(event.target.value)}
          />
          <button className={`btn btn-${isEdit === false ? "primary" : "success"}`} type="submit">
            {
              isEdit === false ? "Add" : "Save"
            }
         
          </button>
        </div>
      </form>
    
  )
}
export default TodoForm

