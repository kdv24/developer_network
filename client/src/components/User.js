import React, {Component} from 'react'

import '../App.css';

class User extends Component {

  render() {
    return(
      <div className="user">
        <span className="delete-button" onClick={this.handleDelete}>x</span>
        <h4 className="user-info" onClick={this.handleClick}>{this.props.user.name}</h4>
        <h5 className="user-info" onClick={this.handleClick}>{this.props.user.email}</h5>
      </div>
    )
  }

  handleClick = () => {
    this.props.onClick(this.props.user.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.user.id)
  }
}

export default User