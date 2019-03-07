import React from 'react';

const Friend = props => {
  return(
    <div>
      <h1>{props.friend.name}</h1>
      <p>Age: {props.friend.age}</p>
      <p>E-mail: {props.friend.email}</p>
    </div>)
};

export default Friend;