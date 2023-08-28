const todo=require('../../Model/todoModel');

//create todo list
const createTodo = async (req, res) => {
   // console.log(req.body)
  const { title, description } = req.body;
  try {
    await todo.create({
      title,
      description,
    });
    res.json({
      status: 201,
      message: "success",
    });
  } catch (error) {
    console.log("Error while creating todo", error.message);
  }
};

//fetch all todo list
const allTodo=async(req,res)=>{
    try {
         const allTodos=await todo.find({});
         res.json({
            status:200,
            message:"success",
            data:allTodos,
         })
    } catch (error) {
        console.log('error while fetching all data',error.message);
    }
}

//delete todo list
const deleteToto=async(req,res)=>{
    // const id=req.params.id;
    // console.log(id);
    try {
        const deletedData=await todo.findByIdAndDelete(req.params.id);
        res.json({
            status:200,
            message:"todo deleted successfully",
            data:deletedData,
        })
    } catch (error) {
        console.log('Error while deleting todo list',error.message);
    }
}

//update todo list
const updateTodo=async(req,res)=>{
    try {
        // const id=req.params.id;
        // console.log(id);
        const updatedData=await todo.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        res.json({
            status:300,
            message:"updated successfully",
            data:updatedData,
        })
    } catch (error) {
        console.log('Error while updating data',error.message);
    }
}

module.exports={
    createTodo,
    allTodo,
    deleteToto,
    updateTodo,
}