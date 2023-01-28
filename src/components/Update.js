import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const Update = () => {

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://63d378ef8d4e68c14eaba273.mockapi.io/crudpractice/${id}`,{
            name: name,
            email: email,

        }).then(() => {
            navigate("/read");
        })
    };



    useEffect(() => {
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"));
    }, [])
    
  return (
    <div>
         <h2>Update Operation</h2>
      <form>
      <div classNameName="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>

        <div classNameName="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}

          />
        </div>
        
        
        <div className="d-flex">
        <button className="btn btn-primary m-3" onClick={handleUpdate} >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary m-3">back</button>
        </Link>
      </div>
      </form>
    </div>
  )
}

export default Update