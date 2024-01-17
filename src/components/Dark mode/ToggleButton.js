import React from 'react';
export const Toggle = ({ label, toggled, onClick }) => {
  return (
    <label>
      <input
        type="checkbox"
        value={toggled}
        defaultChecked={toggled}
        onClick={onClick}
      />
      <span />
      <label>{label}</label>
    </label>
  );
};
