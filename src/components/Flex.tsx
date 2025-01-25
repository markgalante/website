import * as React from "react";

import "./Flex.style.css";

interface FlexProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?: "center" | "between" | "around" | "start" | "end";
  alignItems?: "center" | "start" | "end";
  gap?: number | string;
}

export function Flex({
  flexDirection,
  gap,
  justifyContent,
  alignItems,
  ...props
}: FlexProps) {
  return (
    <div
      className={`flex-container ${props.className ?? ""}`}
      style={{
        ...props.style,
        flexDirection,
        gap,
        justifyContent,
        alignItems,
      }}
      {...props}
    />
  );
}
