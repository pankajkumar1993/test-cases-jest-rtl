import React from 'react'

export default class Users extends React.Component{
  getUserList(){
    return "user list"
  }
  getUser(a){
    return a+"extra";
  }
  render(){
    return(
      <div>
        <h2>User Class Component</h2>
      </div>
    )}
  
}