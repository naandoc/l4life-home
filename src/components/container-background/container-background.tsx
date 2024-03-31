import React, { ReactNode } from "react";
import "@/components/container-background/style.css";

const ContainerBackground = ({ children }: { children: ReactNode }) => {
  return <div className="container-apartments-background">{children}</div>;
};

export default ContainerBackground;
