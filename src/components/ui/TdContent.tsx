import { ReactElement, FC } from "react";
import { TdContentProps } from "../../types/props";

const TdContent: FC<TdContentProps<HTMLSpanElement>> = ({
  attributes,
  content,
}): ReactElement<HTMLTableCellElement> => {
  const isNull: boolean = content === null;
  return isNull ? (
    <span
      {...attributes}
      className={`text-pink-600 capitalize ${attributes?.className}`}
    >
      null
    </span>
  ) : (
    <span {...attributes}>{content}</span>
  );
};

export default TdContent;
