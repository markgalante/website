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
  align?: "center" | "start";
}

interface TextContainerProps {
  color: keyof typeof COLOR_CLASS;
  children: React.ReactNode;
  align?: "center" | "start";
}

function TextContainer({
  color,
  children,
  align = "start",
}: TextContainerProps) {
  return (
    <div className={`${COLOR_CLASS[color]} align-${align}`}>{children}</div>
  );
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

interface TinyProps extends CommonTextProps {}

function Tiny({ children, color = "light", fontFamily = "body" }: TinyProps) {
  return (
    <TextContainer color={color}>
      <p className={`text-tiny ${fontFamily}`}>{children}</p>
    </TextContainer>
  );
}

export const Text = {
  Header1,
  Header2,
  Body,
  Tiny,
};
