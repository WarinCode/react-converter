import { ReactElement, useContext, Context } from "react";
import { DefaultValue } from "../../types";
import ExpressionContext from "../contexts/ExpressionContext";
import ExpressionTypes from "../../github/stack-application/src/enums/ExpressionTypes";

const Select = (): ReactElement<HTMLSelectElement> => {
  const { handleSelect }: DefaultValue =
    useContext<DefaultValue>(ExpressionContext as Context<DefaultValue>);

  return (
    <select
      className="cursor-pointer w-full h-12 p-2 bg-gray-100 border-2 border-black outline-none"
      onChange={handleSelect}
      required
    >
      <option value={ExpressionTypes.Prefix} className="capitalize">
        Prefix Expression
      </option>
      <option
        value={ExpressionTypes.Postfix}
        selected
        className="capitalize"
      >
        Postfix Expression
      </option>
    </select>
  );
};

export default Select;
