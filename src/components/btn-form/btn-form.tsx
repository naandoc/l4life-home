import React from "react";

export default function BtnForm({
  btnName,
  isLoading,
}: {
  btnName: string;
  isLoading: boolean;
}) {
  return (
    <button type="submit" className={`${isLoading ? "btn-loading" : ""}`}>
      <p>{isLoading ? "" : btnName}</p>
    </button>
  );
}
