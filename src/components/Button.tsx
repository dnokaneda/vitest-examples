import React from "react";

type Props = {
  children: string;
  dataTestId?: string;
  secondary?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, dataTestId, secondary, ...rest }: Props) {
  return (
    <button
      className={`button-${secondary ? `secondary` : `primary`}`}
      data-testid={dataTestId ?? "component-button"}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
