import React from 'react';

const Displaydata = ({ fruits, person }) => {
  return (
    <div>
      <h1>Fruits info</h1>
      <p>Fruit: {fruits[1]}</p>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </div>
  );
};

export default Displaydata;