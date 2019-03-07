import React from 'react';

const Friend = props => {
  return(
    <div>
      <h1>{props.friends.name}</h1>
      <p>Age: {props.friends.age}</p>
      <p>E-mail: {props.friends.email}</p>
    </div>)
};

export default Friend;