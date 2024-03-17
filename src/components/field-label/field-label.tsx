import React from "react";

export default function FieldLabel({
  labelName,
  inputType,
  htmlFor,
}: {
  labelName: string;
  inputType: string;
  htmlFor: string;
}) {
  return (
    <div className="field-label">
      <label htmlFor={htmlFor}>{labelName}</label>
      <input type={inputType} id={htmlFor} required />
    </div>
  );
}
