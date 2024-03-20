import React from "react";
import "@/components/msg-error-input/style.css";

export default function MsgErrorInput({ msg }: { msg: string }) {
  return <div className="msg-error-input">{msg}</div>;
}
