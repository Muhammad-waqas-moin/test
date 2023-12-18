import React from 'react';

const Button = ({ text, event }) => {
  return (
    <button
      className="py-4 px-8 bg-amber-400 text-white rounded-lg "
      onClick={event}
    >
      {text}
    </button>
  );
};

export default Button;
