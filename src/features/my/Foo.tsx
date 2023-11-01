import React from 'react';

const MyButton = ({ title, disabled }: { title: string; disabled: boolean }) => {
  return <button disabled={disabled}>{title}</button>;
};

export default MyButton;

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

export { Car, MyButton };
