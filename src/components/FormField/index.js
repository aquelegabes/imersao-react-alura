import React from "react";

function FormField({ label, type, value, name, onChange }) {
  return (
    <div>
      <label>
        {label}
        {type === "textarea" ? (
          <textarea name={name} value={value} onChange={onchange} />
        ) : (
          <input type={type} name={name} value={value} onChange={onChange} />
        )}
      </label>
    </div>
  );
}

export default FormField;
