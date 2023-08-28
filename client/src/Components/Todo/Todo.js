import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Todo = () => {

  const [todos,setTodos]=useState([]);
  //console.log('data',todos);
  
const fetchTodos=()=>{
  axios.get("http://localhost:8080/all")
  .then((respons)=>{
    return respons.data;
  }).then((data)=>{
    setTodos(data?.data);
  }).catch((err)=>console.log(err));
}
useEffect(()=>{
  fetchTodos();
},[])

//delete user
function onDeleteHandler(todo){
  //console.log(todo._id);
  let deleteData=window.confirm('want to delete this todo?')
  if(deleteData){
    console.log(todo);
  }
  // axios.delete("http://localhost:8080/delete/:id");
}

  return (
    <div className="container">
      <table className="table mt-5">
        <thead className="thead-dark conatiner" style={{ fontSize: 20 }}>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Doing</th>
            <th scope="col">Done</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                <button className=' btn bg-secondary'>Doing</button>
              </td>
              <td>
                <button className='btn bg-secondary'>Done</button>
              </td>
              <td>
                <button className='btn bg-primary'>Edit</button>
              </td>
              <td>
                <button className='btn bg-danger'onClick={()=>onDeleteHandler(todo)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;
