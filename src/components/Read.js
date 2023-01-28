import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://63d378ef8d4e68c14eaba273.mockapi.io/crudpractice")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://63d378ef8d4e68c14eaba273.mockapi.io/crudpractice/${id}`)
      .then(() => {
        getData();
      });
  }

  function setToLocalStorage(id, name, email){
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
     <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <Link to="/edit">
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={() =>
                        setToLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email
                        )
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete{""}
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
