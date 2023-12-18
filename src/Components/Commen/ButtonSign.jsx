import React from 'react';

const ButtonSign = ({ text, color }) => {
  return (
    <button
      className={`hover:${
        color ? `bg-${color}-400` : 'none'
      } rounded border-2 text-xs text-white border-amber-400 px-1 py-1 duration-300`}
    >
      {text}
    </button>
  );
};

export default ButtonSign;
