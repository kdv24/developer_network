import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import User from './User.js';

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
        this.setState({users: response.data});
        console.log(response.data);
      })
      .catch(error => console.log(error))
  }

  addNewUser() {
    axios.post('http://localhost:3001/api/v1/users',
      { user:
          {
            name: '',
            email: ''
          }
      }
    )
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error))
  };

  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Users</h3>
        {this.state.users.map((user) => {
          return (<User user={user} key={user.id} />)
        })}
        <button
          className="button"
          onClick={this.addNewUser}
        >
          Add New User
        </button>
      </div>
    )
  }
}

export default UsersContainer
