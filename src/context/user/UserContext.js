import React, { useEffect, useState } from 'react'
import myContext from './CreateContext'
import { fetchAllUser, createUser, updateUser, deleteUser, fetchImg } from './AllApiCall'
import { useContext } from 'react'
 
function UserContext({children}) {
   const [users, setUsers] = useState([])
     
   useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchAllUser();
           if(response.error){
            return alert(response.error)
           }
        setUsers(response);
      } catch (error) {
        console.log(error);
       return alert(`${error.message}`)
      }
    }
    getUsers();
  }, []);
 //create users
 const createUsers = async (user) => {
  try {
    const response = await createUser(user);
       if(response.error){
        return alert(`${response.error}`)
       }
    setUsers([...users, response]);
  } catch (error) {
    console.log(error);
   return alert(`${error.message}`)
  }
}

//update users
const updateUsers = async (user) => {
  try {
    const response = await updateUser(user);
    console.log("response", response);
        if(response.error){
         return alert(`${response.error}`)
        }
    const index = users.findIndex(val => val._id === user.id);
    const updatedUsers = [...users];
    updatedUsers[index] = response;
    setUsers(updatedUsers);
  } catch (error) {
    console.log(error);
   return alert(`${error.message}`)
  }
}
//delete users
const deleteUsers = async (id) => {
  try {
    await deleteUser(id);
    setUsers(users.filter(user => user._id !== id));
  } catch (error) {
    console.log(error);
   return alert(`${error.message}`)
  }
}

 const getAvtImg = async (username) =>{
    const responseAvt =  await fetchImg(username)
    return responseAvt
 }
  return (
      <myContext.Provider value={{users, createUsers, updateUsers, deleteUsers, getAvtImg}}>
        {children}
      </myContext.Provider>
  )
}

export const useUser = () => useContext(myContext);
export default UserContext