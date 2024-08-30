import { ReactElement, FC } from "react";
import { SettingContainerProps } from "../../types/props";

const SettingContainer: FC<
  SettingContainerProps<HTMLDivElement>
> = ({ children, attributes }): ReactElement<HTMLDivElement> => {
  return <div {...attributes} 
  
  >{children}</div>;
};

export default SettingContainer;
