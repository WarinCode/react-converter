import { ReactElement, FC } from "react";
import { TableRowProps } from "../../types/props";
import TdContent from "./TdContent";

const TableRow: FC<TableRowProps<HTMLTableRowElement>> = ({
  attributes,
  statement,
}): ReactElement<HTMLTableRowElement> => {
  return (
    <tr {...attributes} className="text-center border-2 border-black h-12">
      <td className="text-base">
        <TdContent content={statement.infix} />
      </td>
      <td className="border-x-2 border-black text-base">
        <TdContent content={statement.operatorStack} />
      </td>
      <td className="text-base">
        {"prefix" in statement ? (
          <TdContent content={statement.prefix} />
        ) : (
          <TdContent content={statement.postfix} />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
