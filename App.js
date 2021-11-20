import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./App.css"

const API="https://jsonplaceholder.typicode.com/posts";

export default function App(){

        const [mekala, setMekala]= useState({posts:[],userId:"",title:"",body:""})
        





    useEffect(()=>{

      getPosts()

    },[])


    ////GET Operation////

   const getPosts=async ()=>{

   const {data}=await axios.get(API)

   console.log(data)

   setMekala({posts:data})

}


////Delete Operation////


const deletePosts= async(pid)=>{

  const {data}=await axios.delete(`${API}/${pid}`)

  console.log(data)
 
  

}



















const handleSubmit=()=>{




}



const handleChange=({target:{name,value}})=>{










}










   return (

    <Fragment>

    <h3>CRUD with HOOKS- useState() and useEffect()</h3>




  <form onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">User Id: </label>
    <input type="text" name="userId" value={mekala.userId} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Title: </label>
    <input type="text" name="title" value={mekala.title} className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Body: </label>
    <input type="text" name="body" value={mekala.body} className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
  </div>

  <button type="submit" className="btn btn-primary" id="btn">Submit</button>

</form>



















    <table className="table table-bordered border-primary" id="table">

    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">userId</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>


    {mekala.posts.map((post)=>{

      return (
 
        <tr key={post.id}>

        <th scope="row">{post.id}</th>
        <td>{post.userId}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td>
        <button type="button" className="btn btn-primary">EDIT</button>
        <button type="button" className="btn btn-warning" onClick={()=>deletePosts(post.id)}>DELETE</button>

        </td>

      </tr>




      )



    })
    
    
    
    
    
    
    
    }
    
    </tbody>


    



  
    </table>










    </Fragment>





   )




}