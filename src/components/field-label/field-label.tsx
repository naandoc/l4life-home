import React from "react";

export default function FieldLabel({
  handleChange,
  labelName,
  inputType,
  htmlFor,
}: {
  handleChange: any;
  labelName: string;
  inputType: string;
  htmlFor: string;
}) {
  return (
    <div className="field-label">
      <label htmlFor={htmlFor}>{labelName}</label>
      <input
        onChange={handleChange}
        type={inputType}
        id={htmlFor}
        name={htmlFor}
        required
      />
    </div>
  );
}
