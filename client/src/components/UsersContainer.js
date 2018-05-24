import React, {Component}   from 'react';
import axios                from 'axios';
import update               from 'immutability-helper';
import User                 from './User';
import UserForm             from './UserForm';
import '../App.css';

class UsersContainer extends Component {

  constructor(props, state) {
    super(props, state);
    this.state = {
      users: [],
      editingUserId: null,
      notification: ''
    }

    this.addNewUser   = this.addNewUser.bind(this);
    this.updateUser   = this.updateUser.bind(this);
    this.enableEditing = this.enableEditing.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/users')
      .then(response => {
        this.setState({users: response.data});
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Users</h3>
        <button
          className="button"
          onClick={this.addNewUser}
        >Add New User
        </button>
        <span className="notification">{this.state.notification}</span>
        {this.state.users.map((user) => {
          if(this.state.editingUserId === user.id) {
            return(
              <UserForm user={user}
                        key={user.id}
                        updateUser={this.updateUser}
                        nameRef={ input => this.name = input }
                        resetNotification={this.resetNotification}
              />
            )
          } else {
            return (<User user={user} key={user.id} onClick={this.enableEditing} onDelete={this.deleteUser} />)
          }
        })}
      </div>
    )
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
        });
        this.setState({
          users: users,
          editingUserId: response.data.id
        });

      })
      .catch(error => console.log(error))
  };

  updateUser (user) {
    const userIndex = this.state.users.findIndex(x => x.id === user.id)
    const users = update(this.state.users, {
      [userIndex]: { $set: user }
    })
    this.setState({users: users, notification: 'All changes saved'})
  }

  resetNotification = () => {
    this.setState({ notification: ''})
  }

  enableEditing(id) {
    this.setState({ editingUserId: id},
      () => this.name.focus() )
  }

  deleteUser = (id) => {
    axios.delete(`http://localhost:3001/api/v1/users/${id}`)
      .then(response => {
        const userIndex = this.state.users.findIndex( x => x.id === id)
        const users = update(this.state.users, { $splice: [[userIndex, 1]]})
        this.setState({users: users})
      })
      .catch(error => console.log(error))
  }

}

export default UsersContainer
