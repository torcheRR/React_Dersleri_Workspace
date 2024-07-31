import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const BASE_URL = "http://localhost:3000";

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response);
  };

  const getUserByID = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    //POST: veri eklemek için kullanılır.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    //PUT: veri güncellemek için kullanılır.
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  const deleteUser = async (userId) => {
    //DELETE: veri silmek için kullanılır.
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse.data);
  };



  const getUserById=async(userId)=>{
    const response = await axios.get(`${BASE_URL}/users/${userId}`) 
    return response.data.postId;
  }

  const getPostById = async (postId)=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/"+postId)
    return response.data
  }

  const getPost = async()=>{
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData)
  }

  useEffect(() => {
    // getAllUsers;
    // getUserByID(1);
    //   const newUser = {
    //     "username": "Nilay",
    //     "password":"ÖCER"
    //   }
    //   createUser(newUser)
    // updateUser(4314,{
    //   "id":4314,
    //   "username":"Nilay",
    //   "password":"anne"
    // })

    // deleteUser(1)
  },[]);

  return <div></div>;
}

export default App;
