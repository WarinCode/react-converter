import { ReactElement, FC } from "react";
import { ButtonProps } from "../../types/props";

const Button: FC<ButtonProps<HTMLButtonElement>> = ({
  attributes,
  text,
}): ReactElement<HTMLButtonElement> => {
  return <button {...attributes}>{text}</button>;
};

export default Button;
