import * as React from "react";

import "./Text.style.css";

const COLOR_CLASS = {
  dark: "font-dark",
  light: "font-light",
  secondary: "font-secondary",
} as const;

interface CommonTextProps {
  children: React.ReactNode;
  color?: keyof typeof COLOR_CLASS;
  fontFamily?: "body" | "body-mono" | "heading-mono";
}

interface TextContainerProps {
  color: keyof typeof COLOR_CLASS;
  children: React.ReactNode;
}

function TextContainer({ color, children }: TextContainerProps) {
  return <div className={COLOR_CLASS[color]}>{children}</div>;
}

interface Header1Props extends CommonTextProps {}

function Header1({
  children,
  color = "light",
  fontFamily = "heading-mono",
}: Header1Props) {
  return (
    <TextContainer color={color}>
      <h1 className={`heading1 ${fontFamily}`}>{children}</h1>
    </TextContainer>
  );
}

interface Header2Props extends CommonTextProps {}

function Header2({
  children,
  color = "light",
  fontFamily = "heading-mono",
}: Header2Props) {
  return (
    <TextContainer color={color}>
      <h3 className={`heading1 heading2-base ${fontFamily}`}>{children}</h3>
    </TextContainer>
  );
}

interface BodyProps extends CommonTextProps {}

function Body({ children, color = "light", fontFamily = "body" }: BodyProps) {
  return (
    <TextContainer color={color}>
      <p className={`base-body ${fontFamily}`}>{children}</p>
    </TextContainer>
  );
}

export const Text = {
  Header1,
  Header2,
  Body,
};
