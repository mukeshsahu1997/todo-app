import React from 'react'

const Todolist = ({item,deleteItems,id}) => {
    
    return (
        <>
        <div className='todo_style'>
        <i onClick={()=>{deleteItems(id)}} className="fa fa-times" aria-hidden="true" />  
        <li>{item}</li>
        </div>
        </>
    )
   
}

export default Todolist