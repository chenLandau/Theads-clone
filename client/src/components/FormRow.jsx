import React from "react";
const FormRow = ({ type, name, placeHolder, icon, onChange }) => {
  return (
    <div className="form-row">
      {icon}
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        placeholder={placeHolder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow;
