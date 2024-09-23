import React from 'react';

const Button = React.memo(({ value, onClick }) => {
  console.log(`Rendering button: ${value}`);
  return (
    <button onClick={() => onClick(value)}>
      {value}
    </button>
  );
});

export default Button;
