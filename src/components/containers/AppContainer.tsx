import { ReactElement, FC } from "react";
import { AppContainerProps } from "../../types/props";

const AppContainer: FC<AppContainerProps<HTMLElement>> = ({
  children,
  attributes,
}): ReactElement<HTMLElement> => {
  return <main {...attributes}>{children}</main>;
};

export default AppContainer;
