import { ReactElement, FC } from "react";
import { SelectContainerProps } from "../../types/props";

const SelectContainer: FC<
  SelectContainerProps<HTMLDivElement>
> = ({
    children,
    attributes
}): ReactElement<HTMLDivElement> => {
  return <div {...attributes}>{children}</div>;
};

export default SelectContainer;
