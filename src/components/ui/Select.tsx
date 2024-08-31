import { ReactElement, useContext, Context } from "react";
import { DefaultValue } from "../../types";
import ExpressionContext from "../contexts/ExpressionContext";
import ExpressionTypes from "../../libs/src/enums/ExpressionTypes";

const Select = (): ReactElement<HTMLSelectElement> => {
  const { handleSelect }: DefaultValue = useContext<DefaultValue>(
    ExpressionContext as Context<DefaultValue>
  );
  const selecteType: ExpressionTypes = localStorage.getItem(
    "type"
  ) as ExpressionTypes;

  return (
    <select
      className="cursor-pointer w-full h-12 p-2 bg-gray-100 border-2 border-black outline-none"
      onChange={handleSelect}
      required
    >
      <option
        value={ExpressionTypes.Prefix}
        className="capitalize max-sm:text-base"
        selected={selecteType === ExpressionTypes.Prefix}
      >
        Prefix Expression
      </option>
      <option
        value={ExpressionTypes.Postfix}
        className="capitalize max-sm:text-base"
        selected={selecteType === ExpressionTypes.Postfix}
      >
        Postfix Expression
      </option>
    </select>
  );
};

export default Select;
