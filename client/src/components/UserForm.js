import React, { Component }   from 'react'
import axios                  from 'axios'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleBlur  = this.handleBlur.bind(this);
  }

  render() {
    return (
      <div className="user">
        <form className="form"
              onBlur={this.handleBlur}
        >
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Enter a name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <textarea className="input"
                    name="email"
                    placeholder="Add your email address"
                    value={this.state.email}
                    onChange={this.handleInput}
          >
          </textarea>
        </form>
      </div>
    )
  }


  handleInput(e) {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const user = {
      name: this.state.name,
      email: this.state.email
    }
    axios.put(
      `http://localhost:3001/api/v1/users/${this.props.user.id}`,
      {
        user: user
      })
      .then(response => {
        this.props.updateUser(response.data)
      })
      .catch(error => console.log(error))
  }
}
export default UserForm
