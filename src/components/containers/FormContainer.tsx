import { ReactElement, FC } from "react";
import { FormContainerProps } from "../../types/props";

const FormContainer: FC<FormContainerProps<HTMLFormElement>> = ({
  children,
  attributes,
}): ReactElement<HTMLDivElement> => {
  return (
    <form
      {...attributes}
    >
      {children}
    </form>
  );
};

export default FormContainer;
