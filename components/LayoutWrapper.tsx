// Example of a simple layout wrapper
import React from "react";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="layout-wrapper">{children}</div>;
};

export default LayoutWrapper;
