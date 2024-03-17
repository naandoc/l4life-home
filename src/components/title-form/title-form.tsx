import React from "react";

export default function TitleForm({ title }: { title: string }) {
  return (
    <div className="form-title">
      <h1>{title}</h1>
    </div>
  );
}
