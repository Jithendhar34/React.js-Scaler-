import React from 'react';

const HelloComponent = (props) => {
  return (
    <div>
      <h1>Hello all this is {props.name},{props.age}</h1>
    </div>
  )
}

export default HelloComponent