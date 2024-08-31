import { ReactElement, useContext, FC, Context } from "react";
import ExpressionContext from "../contexts/ExpressionContext";
import { DefaultValue } from "../../types";
import { ParagraphProps } from "../../types/props";

const Paragraph: FC<ParagraphProps> = ({
  attributes,
}): ReactElement<HTMLParagraphElement> => {
  const { type }: DefaultValue = useContext<DefaultValue>(
    ExpressionContext as Context<DefaultValue>
  );
  return (
    <p
      {...attributes}
      className="text-slate-50 text-center italic mb-4 max-md:text-lg max-[500px]:text-sm"
    >
      แปลงนิพจน์จาก <span className="font-bold">Infix</span> เป็นนิพจน์ &nbsp;
      <span className="text-yellow-300 font-bold">{type}</span>
    </p>
  );
};

export default Paragraph;
