import "./Button.css";
import * as React from "react";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

function Button(props: Props) {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
