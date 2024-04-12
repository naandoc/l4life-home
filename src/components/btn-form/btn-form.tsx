import React from "react";
import "@/components/btn-form/style.css";

export default function BtnForm({
  btnName,
  isLoading,
}: {
  btnName: string;
  isLoading: boolean;
}) {
  return (
    <button
      type="submit"
      className={`${isLoading ? "btn-loading" : ""} btn-form`}
    >
      <p>{isLoading ? "" : btnName}</p>
    </button>
  );
}
