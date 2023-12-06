import React ,{Fragment,useState} from  'react';
 function Todoinput(props){

    //--------------------
// Save data to local storage

// Retrieve data from local storage

// Remove item from local storage

    //--------------
const [inputText,setinputText]=useState('');
localStorage.setItem('todotask', inputText);
const value = localStorage.getItem('todotask');
localStorage.removeItem('todotask');

    const handleEnterPress = (e) => {
        if (e.keyCode === 13)//enter key value
        {
            props.addList(inputText)
           //  setInputText("")
        }
   
    }

// Function to add a new task


    const onSubmitForm=async e=>{
        e.preventDefault();
        try{
            const body={inputText};
            await fetch("http://localhost:5000/alltodolist",{
                method:"POST",
                headers :{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            window.location="/";
        }
        catch(err)
        {
            console.log(err.message);
        }
    }
return(
<Fragment>
    <div className='input-container'>
        <form onSubmit={onSubmitForm}>
        <label>Enter Task*:</label>
        <input type='text' required value={inputText} className='input-box-todo' placeholder='Enter Your Todays Task' 
                                onChange={e => { setinputText(e.target.value) }}
                                onKeyDown={handleEnterPress}
                           
        
        ></input>
        <button className='btn btn-primary' onClick={() => {
                        props.addList(inputText);}}
 
 > Add Task</button>
        </form>
    </div>
</Fragment>

)
 }
 export default Todoinput;
 