import Todoinput from './Component/Todoinput';
import Todolist from './Component/Todolist';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [listtodo,setlisttodo]=useState([]);

  let addList=(inputText)=>{
    if(inputText!=='')
setlisttodo([...listtodo,inputText]);
  }
  const deleteListItem=(key)=>{
let newListTodo=[...listtodo];
newListTodo.splice(key,1)
setlisttodo([...newListTodo])
  }

  return (
  
    <div className="App">
      <div className='main-div'>
      <center><h1 style={{background:"orange"}}>To Do List</h1></center>
      <Todoinput  addList={addList}/>
      <center><h1>My To Do Task</h1></center>
      <hr/>
      {
        listtodo.map((listitem,i)=>{
return(
  <Todolist key={i} index={i} item={listitem} deleteItem={deleteListItem} ></Todolist>
)
        })
      }
      
      </div>
      </div>
  );
}

export default App;
