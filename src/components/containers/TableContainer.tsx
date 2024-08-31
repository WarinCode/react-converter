import { ReactElement, FC, Context, useContext } from "react";
import { TableContainerProps } from "../../types/props";
import { DefaultValue } from "../../types";
import ExpressionContext from "../contexts/ExpressionContext";

const TableContainer: FC<TableContainerProps> = ({
  children,
  attributes,
}): ReactElement<HTMLTableElement> => {
  const { result }: DefaultValue = useContext<DefaultValue>(
    ExpressionContext as Context<DefaultValue>
  );
  if (result === null) return <table></table>;
  return <table {...attributes}>{children}</table>;
};

export default TableContainer;
