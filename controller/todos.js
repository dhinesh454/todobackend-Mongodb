const Todos = require('../models/todos');

///string validation use this for post get functions in controller
const isstringinvalid=(string)=>
    {
       if(string== undefined ||string.length===0) 
       {
          return true;
       }
       else 
       {
          return false;
       }
    
    }


    //add todos
const addTodos = async (req,res)=>{
const {title,description}=req.body;
try {
    
    if(isstringinvalid(title.trim().toString()) || isstringinvalid(description.trim().toString())){
        return res.status(400).json({message:"something missing",success:false})
    }
    
    const data = await Todos.create({title,description});
    res.status(201).json({data,success:true})
} catch (error) {
    res.status(500).json(error.message);
    console.log(error)
}
};




//get todos 
const getTodos = async(req,res) => {
   try {
     const data = await Todos.find();
    
     res.status(200).json({data,success:true})
   } catch (error) {
    res.status(500).json(error.message);
    console.log(error)
   }
}




//update todos
const updateTodos = async(req,res)=>{
    const {id} = req.params
    const {title,description}=req.body;

    try {
        const updatedTodos = await Todos.findByIdAndUpdate({_id:id},{title,description},{new:true});

        if(!updatedTodos){
            return res.status(400).json({message:'Not find any todos',success:false});

        }


        res.status(200).json({updatedTodos,success:true});
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error)
    }
}








//delete todos
const deleteTodos = async(req,res) => {
    const {id} = req.params
    try {
        if (!id) {
            return res.status(400).json({ message: 'ID is missing or not defined properly', success: false });
        }

        const deletedTodo = await Todos.findByIdAndDelete({ _id: id });

       

         res.status(202).json({message:'Successfully deleted',success:false}).end();



    } catch (error) {
         res.status(500).json(error);
        console.log(error.message)
    }
};







module.exports={addTodos,getTodos,updateTodos,deleteTodos}