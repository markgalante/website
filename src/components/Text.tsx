import * as React from "react";

import "./Text.style.css";

interface CommonTextProps {
  children: React.ReactNode;
}

interface Header1Props extends CommonTextProps {}

function Header1({ children }: Header1Props) {
  return <h1 className="heading1">{children}</h1>;
}

interface BodyProps extends CommonTextProps {}

function Body({ children }: BodyProps) {
  return <p className="body">{children}</p>;
}

export const Text = {
  Header1,
  Body,
};
