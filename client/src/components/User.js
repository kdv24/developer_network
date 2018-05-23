import React from 'react'

import '../App.css';

const User = ({user}) =>
      <div className="user" key={user.id}>
        <h4 className="user-info">{user.name}</h4>
        <h5 className="user-info">{user.email}</h5>
      </div>;

export default User

