import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GoodChildren = ({ children }: Props) => {
  return (
    <div style={{ color: "red" }}>
      <h2>This is a Children and I want to show the parent state inside</h2>
      {children}
    </div>
  );
};

