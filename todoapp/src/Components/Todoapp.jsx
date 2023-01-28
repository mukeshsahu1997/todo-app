import React, { useState } from 'react'
import "./Todoapp.css";
import Todolist from './Todolist';

const Todoapp = () => {
    const [inpList,setInplist]=useState("");
    const [items,setItmes]=useState([]);

    const handleChange=(e)=>{
        setInplist(e.target.value)
    }
      
    const listItems=()=>{
        setItmes((oldItems)=>{
            return [...oldItems,inpList]
        })
        setInplist("")
    }

    const deleteItems=(id)=>{
        setItmes((oldItems)=>{
            return oldItems.filter((ele,index)=>{
                return index!==id;
            })
        })
    }
    
  return (
    <>
    <div className='main_div'>
        <div className='center_div'>
            <br />
            <h1>Todo List</h1>
            <br />
            <input 
                type="text" 
                placeholder='Add a Items'
                onChange={handleChange}
                value={inpList}
                />
            <button onClick={listItems}>+</button>

            <ol>
                {/* <li>{inpList}</li> */}
                {items.map((itemA,index)=>{
                  return <Todolist 
                            key={index} 
                            id={index} 
                            item={itemA}
                            deleteItems={deleteItems}
                            />
                })}
            </ol>


        </div>

    </div>

    </>
  )
}

export default Todoapp