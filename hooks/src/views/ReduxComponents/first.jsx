import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from '../features/User';

export default function First() {

     const dispatch = useDispatch();
     const userList = useSelector((state) => state.users.value);

     const [name, setName] = useState("");
     const [username, setUserName] = useState("");
     const [newUsername, setNewUserName] = useState("");

     return (
          <div>
               <div className='addUsers col-md-3'>
                    <input className="form-control" type="text" placeholder="User Name" onChange={(e) => { setUserName(e.target.value) }} />
                    <br />
                    <input className="form-control" type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                    <br />
                    <button className="btn btn-outline-primary" onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username })) }}>Add User</button>
               </div>
               <div className='displayUsers'>
                    {userList.map((user) => {
                         return (
                              <div>
                                   <h2>{user.name}</h2>
                                   <h2> {user.username}</h2>
                                   <input className="form-control" type="text" placeholder="New User Name" onChange={(e) => { setNewUserName(e.target.value) }} />
                                   <br />
                                   <button className="btn btn-outline-primary" onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername })) }}> Update User Name</button>
                                   <button className="btn btn-outline-primary" onClick={() => { dispatch(deleteUser({ id: user.id })) }}> Delete User</button>
                              </div>
                         )
                    })}
               </div>
          </div>
     )
}
