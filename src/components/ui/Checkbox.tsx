import {
  ReactElement,
  FC,
  useContext,
  useCallback,
  ChangeEvent,
  Context,
} from "react";
import { CheckboxProps } from "../../types/props";
import { DefaultValue } from "../../types";
import ExpressionContext from "../contexts/ExpressionContext";
import { AppSettings } from "../../libs/src/types";

const Checkbox: FC<CheckboxProps> = ({
  text,
  keyName,
  id,
}): ReactElement<HTMLDivElement> => {
  const {
    handleCheck,
    setSettings,
    settings,
    setExpression,
    inputRef,
  }: DefaultValue = useContext<DefaultValue>(
    ExpressionContext as Context<DefaultValue>
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      handleCheck(e, keyName);
      if (keyName === "enableCapitalize") {
        setSettings((prevSettings: AppSettings) => {
          let temp = inputRef.current.value;
          inputRef.current.value = prevSettings.enableCapitalize
            ? temp.toUpperCase()
            : temp.toLowerCase();
          setExpression(inputRef.current.value);
          return prevSettings;
        });
      }
    },
    [settings]
  );

  return (
    <div className="mx-4 mb-2 flex items-center">
      <input
        type="checkbox"
        id={id}
        defaultChecked={localStorage.getItem(keyName) === "true"}
        className="hover:cursor-pointer w-5 h-5 flex-grow accent-green-700"
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className="select-none hover:cursor-pointer flex-grow ms-2 indent-1 transition-colors delay-75 hover:text-green-700 max-md:text-base max-sm:text-sm"
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
