import { createContext, Context } from "react";
import { DefaultValue } from "../../types";

const ExpressionContext: Context<DefaultValue | null> = createContext<DefaultValue | null>(null);
export default ExpressionContext;
