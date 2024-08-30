import { createContext, Context } from "react";
import { DefaultValue } from "../../types";
import ExpressionTypes from "../../github/stack-application/src/enums/ExpressionTypes";

const ExpressionContext: Context<DefaultValue> = createContext<DefaultValue>({
  expression: "",
  setExpression: function () {},
  type: ExpressionTypes.Postfix,
  setType: function () {},
  result: "",
  setResult: function () {},
  statements: [],
  setStatements: function () {},
  settings: {},
  setSettings: function () {},
  handleChange: function () {},
  handleSelect: function () {},
  handleCheck: function () {},
  handleSubmit: function () {},
});
export default ExpressionContext;
