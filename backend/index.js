const express=require('express');
var app=express();
const storage=require("node-persist");
var bodyParser=require('body-parser');
const cors=require('cors');
app.use(cors());
var jsonParser=bodyParser.json();
storage.init();

app.get("/todo",async(req,res)=>{
    res.send(await storage.values());
});

app.post("/alltodolist",jsonParser,async(req,res)=>{
    const AllTodoList=await storage.getItem("AllTodoList")|| [];
    const todotask=req.body;
    todotask.todotaskid=AllTodoList ? AllTodoList.length + 1:1;
    await storage.setItem("AllTodoList",[...AllTodoList,todotask]);
});

app.delete('/alltodolist/:todotaskid', jsonParser,async (req, res) => {
    
        try {
            // Your deletion logic here
            const id = req.params.todotaskid;
    
            await AllTodoList.findByIdAndDelete(todotaskid);
    
            res.status(200).json({ message: 'To-do item deleted ' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    
      });
app.listen(5000,()=>{
    console.log("Server has started ..............!");
});