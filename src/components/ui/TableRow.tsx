import { ReactElement, FC } from "react";
import { TableRowProps } from "../../types/props";

const TableRow: FC<TableRowProps<HTMLTableRowElement>> = ({
  attributes,
  statement,
}): ReactElement<HTMLTableRowElement> => {
  return (
    <tr {...attributes} className="text-center border-2 border-black h-12">
      <td>
        {statement.infix === null ? (
          <span className="text-pink-600 capitalize">null</span>
        ) : (
          statement.infix
        )}
      </td>
      <td className="border-x-2 border-black">
        {statement.operatorStack === null ? (
          <span className="text-pink-600 capitalize">null</span>
        ) : (
          statement.operatorStack
        )}
      </td>
      <td>
        {"prefix" in statement ? (
          statement.prefix === null ? (
            <span className="text-pink-600 capitalize">null</span>
          ) : (
            statement.prefix
          )
        ) : statement.postfix === null ? (
          <span className="text-pink-600 capitalize">null</span>
        ) : (
          statement.postfix
        )}
      </td>
    </tr>
  );
};

export default TableRow;
