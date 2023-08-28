import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddTodo = () => {

  const [title,setTitle]=useState('');
  const[desc,setDesc]=useState('');

  function titleHandler(event){
    setTitle(event.target.value);
  }
  function descHandler(event){
    setDesc(event.target.value);
  }

  function formHandler(event){
    event.preventDefault();
    axios.post("http://localhost:8080/create", {
      title:title,
      description:desc,
    }).then((response) => {
      console.log(response);
    });
    setTitle('');
    setDesc('');
  }

  
  return (
    <form className='container mt-5' onSubmit={formHandler}>
        <div className="form-group " >
            <label for="todos" style={{fontSize:30}}>Title</label>
            <input type="text" className="form-control" id="todos" placeholder="Enter  Todo" onChange={titleHandler} value={title} required />
        </div>
        <div className="form-group">
            <label for="desc" style={{fontSize:30}}>Description</label>
            <input type="text" className="form-control" id="desc" placeholder="Description" onChange={descHandler} value={desc} required/>
        </div>
        
        <button type="submit" className="btn btn-secondary btn-block mt-5" style={{fontSize:20}}>Submit</button>
    </form>
  );
}

export default AddTodo;
