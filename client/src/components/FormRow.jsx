import React from "react";
const FormRow = ({ type, name, placeHolder, icon, defaultValue, required }) => {
  return (
    <div className="form-row">
      {icon}
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        placeholder={placeHolder}
        required={required !== undefined ? required : true}
      />
    </div>
  );
};

export default FormRow;
