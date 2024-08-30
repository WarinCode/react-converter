import { ReactElement, useEffect, useContext } from "react";
import { DefaultValue } from "../../types";
import ExpressionContext from "../contexts/ExpressionContext";
import InputField from "./InputField";
import Button from "./Button";

const Form = (): ReactElement<HTMLDivElement> => {
  const { inputRef }: DefaultValue =
    useContext<DefaultValue>(ExpressionContext);

  useEffect((): void => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="w-full mb-4">
        <InputField />
      </div>
      <Button
        text={"แปลง"}
        attributes={{
          type: "submit",
          className:
            "w-[180px] h-12 mt-6 bg-black font-bold text-white cursor-pointer rounded-lg shadow-md transition-transform delay-75 ease-lenear active:scale-90",
        }}
      />
    </>
  );
};

export default Form;
