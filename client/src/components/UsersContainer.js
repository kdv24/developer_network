import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import update from 'immutability-helper';
import User from './User.js';

class UsersContainer extends Component {

  constructor(props, state) {
    super(props, state);
    this.state = {
      users: []
    }

    this.addNewUser = this.addNewUser.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/users')
      .then(response => {
        this.setState({users: response.data});
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
        const users = update(this.state.users, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({users: users})

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
