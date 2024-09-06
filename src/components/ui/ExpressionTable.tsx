import { ReactElement, useContext, Context } from "react";
import uuid from "react-uuid";
import { DefaultValue } from "../../types";
import ExpressionContext from "../contexts/ExpressionContext";
import ExpressionTypes from "../../libs/src/enums/ExpressionTypes";
import { ToPostfix, ToPrefix } from "../../libs/src/types";
import TableRow from "./TableRow";

const ExpressionTable = (): ReactElement<HTMLElement> => {
  const { type, result, statements }: DefaultValue = useContext<DefaultValue>(
    ExpressionContext as Context<DefaultValue>
  );

  if (result === null) {
    return <div></div>;
  }
  return (
    <>
      <thead className="border-y-2 bg-black border-black text-slate-50 h-16">
        <th className="max-sm:text-sm text-wrap">
          Input <span className="text-yellow-300">(Infix)</span>
        </th>
        <th className="border-x-2 border-black max-sm:text-sm text-wrap">
          Operator Stack
        </th>
        <th className="max-sm:text-sm text-wrap">
          Output{" "}
          <span className="text-yellow-300">
            ({type === ExpressionTypes.Postfix ? "Postfix" : "Prefix"})
          </span>
        </th>
      </thead>
      <tbody>
        {statements.map(
          (
            statement: ToPrefix | ToPostfix
          ): ReactElement<HTMLTableRowElement> => (
            <TableRow key={uuid()} statement={statement} />
          )
        )}
      </tbody>
      <tfoot className="h-12 bg-black">
        <tr className="text-center text-slate-50">
          <td className="max-sm:text-sm text-wrap">ผลลัพธ์คือ: </td>
          <td className="max-sm:text-sm text-wrap font-bold" colSpan={2}>
            {result}
          </td>
        </tr>
      </tfoot>
    </>
  );
};

export default ExpressionTable;
