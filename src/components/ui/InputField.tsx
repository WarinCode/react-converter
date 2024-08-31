import { ReactElement, useContext, Context } from "react";
import ExpressionContext from "../contexts/ExpressionContext";
import { DefaultValue } from "../../types";

const InputField = (): ReactElement => {
  const { settings, handleChange, inputRef }: DefaultValue =
    useContext<DefaultValue>(ExpressionContext as Context<DefaultValue>);

  return (
    <>
      <label
        htmlFor="expression"
        className="block text-center mb-8 text-2xl font-bold"
      >
        ป้อนนิพจน์ Infix:{" "}
      </label>
      <input
        className={`w-3/5 max-[580px]:w-full h-12 block mx-auto outline-none caret-blue-400 border border-gray-400 rounded-full text-center tracking-widest placeholder:p-2 placeholder:text-center placeholder:capitalize ${
          settings.enableCapitalize ? "uppercase" : "lowercase"
        }`}
        type="text"
        id="expression"
        placeholder="Infix expression"
        onChange={handleChange}
        minLength={3}
        maxLength={50}
        autoComplete="off"
        autoCorrect="off"
        autoSave="off"
        spellCheck={false}
        ref={inputRef}
        required
      />
    </>
  );
};

export default InputField;
