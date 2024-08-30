import { ReactElement, useContext, FC, Context } from "react";
import { ResultofExpressionProps } from "../../types/props";
import ExpressionContext from "../contexts/ExpressionContext";
import { DefaultValue } from "../../types";

const ResultofExpression: FC<ResultofExpressionProps<HTMLDivElement>> = ({
  attributes,
}): ReactElement<HTMLDivElement> => {
  const { result, type }: DefaultValue =
    useContext<DefaultValue>(ExpressionContext as Context<DefaultValue>);

  return (
    <div
      {...attributes}
      className={`w-full h-32 mt-12 p-4 text-center text-bold bg-gradient-to-r from-rose-600 to-rose-300 rounded-xl shadow-xl border-8 border-white  ${attributes?.className}`}
    >
      {result === null ? (
        <h2 className="text-3xl text-bold translate-y-6">ยังไม่มีผลลัพธ์ใดๆ</h2>
      ) : (
        <span className="translate-y-2">
          แปลงเป็นนิพจน์ {type} ได้คือ:
          <h2 className="text-5xl text-bold tracking-wide">{result}</h2>
        </span>
      )}
    </div>
  );
};

export default ResultofExpression;
