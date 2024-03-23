import React from "react";

export default function FieldLabel({
  handleChange,
  labelName,
  inputType,
  htmlFor,
  pattern,
  titlePattern,
}: {
  handleChange: any;
  labelName: string;
  inputType: string;
  htmlFor: string;
  pattern: string;
  titlePattern: string;
}) {
  return (
    <div className="field-label">
      <label htmlFor={htmlFor}>{labelName}</label>
      <input
        onChange={handleChange}
        type={inputType}
        id={htmlFor}
        name={htmlFor}
        pattern={pattern}
        title={titlePattern}
        required
      />
    </div>
  );
}
