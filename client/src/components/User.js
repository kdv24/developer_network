import React from 'react'

import '../App.css';

const User = ({user}) =>
      <div className="user" key={user.id}>
        <h4>{user.name}</h4>
        <h5>{user.email}</h5>
      </div>;

export default User

