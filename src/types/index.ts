import { Dispatch, SetStateAction, ChangeEvent, FormEvent, MutableRefObject } from "react";
import ExpressionTypes from "../libs/src/enums/ExpressionTypes";
import { AppSettings, ToPostfix, ToPrefix } from "../libs/src/types";

export interface DefaultValue {
  expression: string;
  setExpression: Dispatch<SetStateAction<string>>;
  type: ExpressionTypes;
  setType: Dispatch<SetStateAction<ExpressionTypes>>;
  result: string | null;
  setResult: Dispatch<SetStateAction<string | null>>;
  statements: ToPostfix[] | ToPrefix[];
  setStatements: Dispatch<SetStateAction<ToPostfix[] | ToPrefix[]>>;
  settings: Partial<AppSettings>;
  setSettings: Dispatch<SetStateAction<Partial<AppSettings>>>;
  inputRef: MutableRefObject<HTMLInputElement>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleCheck: (e: ChangeEvent<HTMLInputElement>, keyName: keyof AppSettings) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface CheckboxObject {
  keyName: keyof AppSettings;
  text: string;
}