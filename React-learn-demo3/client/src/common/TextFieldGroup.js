import React, { Component } from "react";

const TextFieldGroup = ({ name, placeholder, value, label, error, info, type, onChange, disabled }) => {
  return (
    <div className="form-group">
      <input type={type} placeholder={placeholder} name={name} onChange={onChange} />
    </div>
  );
};

//传入默认状态
TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
