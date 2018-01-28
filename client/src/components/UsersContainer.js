import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class UsersContainer extends Component {

  constructor(props) {
  super(props);
  this.state = {
    users: []
  }
}

componentDidMount() {
  axios.get('http://localhost:3001/api/v1/users.json')
  .then(response => {
    this.setState({users: response.data})
  })
  .catch(error => console.log(error))
}

  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Users</h3>
        {this.state.users.map((user) => {
          return(
            <div className="user" key={user.id} >
              <h4>{user.name}</h4>
              <h5>{user.email}</h5>
            </div>
          )
        })}
      </div>
    )
  }
}

export default UsersContainer
