import React from 'react';

export default function NumberList(props) {
  const listItems = props.numbers.map((number) => <li key={number}>{number}</li>);

  return (
    <ul>{listItems}</ul>
  );
}
