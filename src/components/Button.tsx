import * as React from "react";
import "./Button.style.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ disabled, ...props }: ButtonProps) {
  return (
    <EnabledContainer disabled={disabled}>
      <button
        {...props}
        className={`button-base ${!disabled ? "button-active-effects" : ""}`}
      />
    </EnabledContainer>
  );
}

function EnabledContainer(props: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <div
      {...props}
      className={props.disabled ? "button-disabled" : "button-active"}
    />
  );
}
