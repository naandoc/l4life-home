import React from "react";
import "@/components/btn-form/style.css";

export default function BtnForm({
  btnName,
  isLoading,
  handleSubmit,
}: {
  btnName: string;
  isLoading: boolean;
  handleSubmit?: () => void;
}) {
  return (
    <button
      type="submit"
      className={`${isLoading ? "btn-loading" : ""} btn-form`}
      onClick={handleSubmit}
    >
      <p>{isLoading ? "" : btnName}</p>
    </button>
  );
}
