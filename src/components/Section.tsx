import * as React from "react";

import "./Section.style.css";

interface SectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode | Array<React.ReactNode>;
}

export function Section({ children, ...props }: SectionProps) {
  return (
    <div className="section-container" {...props}>
      {children}
    </div>
  );
}
