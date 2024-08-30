import { ReactElement, useContext, FC } from "react";
import ExpressionContext from "../contexts/ExpressionContext";
import { DefaultValue } from "../../types";
import { ParagraphProps } from "../../types/props";

const Paragraph: FC<ParagraphProps> = ({ attributes }): ReactElement<HTMLParagraphElement> => {
  const { type }: DefaultValue = useContext<DefaultValue>(ExpressionContext);
  return (
    <p {...attributes}>
      แปลงนิพจน์จาก <strong>Infix</strong> เป็นนิพจน์ &nbsp;
      <strong className="text-yellow-300">{type}</strong>
    </p>
  );
};

export default Paragraph;
