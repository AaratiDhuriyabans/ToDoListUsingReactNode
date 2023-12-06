import React,{useState} from 'react';
function Todolist(props){
    const DeleteTask = async (todotaskid) => {
        try {
            await fetch(`http://localhost:5000/alltodolist/${todotaskid}`, {
                method: "DELETE", // Using the DELETE method for deletion
                headers: { "Content-Type": "application/json" },
            });
            // Redirect or perform any necessary actions after deletion
            window.location = "/";
        } catch (err) {
            console.log(err.message);

        }
    };
    return(
        <div>
<li className='list-item' align='center'>
    {props.item}
    <span className='icons'>
    <i style={{marginLeft:"500px"}} className='fa-solid fa-trash-can icon-delete' onClick={e=>{props.deleteItem(props.index)}}> </i>
    </span>
    <span className='icons'>
    <i style={{marginLeft:"10px"}} className='fa-solid fa-pen-to-square' > </i>
    </span>
    <span className='icons'>
    <i style={{marginLeft:"10px"}} className="fa-solid fa-check-double"></i>
    </span>
    
     </li>
        </div>
    )
}
export default Todolist;