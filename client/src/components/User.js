import React, {Component} from 'react'

import '../App.css';

class User extends Component {

  handleClick = () => {
    this.props.onClick(this.props.user.id)
  }

  render() {
    return(
      <div className="user">
        <h4 className="user-info" onClick={this.handleClick}>{this.props.user.name}</h4>
        <h5 className="user-info" onClick={this.handleClick}>{this.props.user.email}</h5>
      </div>
    )
  }
}

export default User