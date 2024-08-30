import {
  ReactElement,
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  useRef,
  useCallback,
  MutableRefObject,
} from "react";
import StackApplication from "../../github/stack-application/src/classes/StackApplication";
import {
  AppSettings,
  ToPostfix,
  ToPrefix,
} from "../../github/stack-application/src/types";
import ExpressionTypes from "../../github/stack-application/src/enums/ExpressionTypes";
import ExpressionContext from "../contexts/ExpressionContext";
import FormContainer from "../containers/FormContainer";
import SelectContainer from "../containers/SelectContainer";
import SettingContainer from "../containers/SettingContainer";
import Form from "./Form";
import ResultofExpression from "./ResultofExpression";
import ExpressionTable from "./ExpressionTable";
import Checkboxes from "./Checkboxes";
import Select from "./Select";
import Paragraph from "./Paragraph";

const Converter = (): ReactElement<HTMLElement> => {
  const [expression, setExpression] = useState<string>("");
  const [type, setType] = useState<ExpressionTypes>(ExpressionTypes.Postfix);
  const [result, setResult] = useState<string | null>(null);
  const [settings, setSettings] = useState<Partial<AppSettings>>({});
  const [statements, setStatements] = useState<ToPostfix[] | ToPrefix[]>([]);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect((): void => {
    for (let i: number = 0; i < localStorage.length; i++) {
      setSettings((prev: AppSettings): AppSettings => {
        const key: keyof AppSettings = localStorage.key(i) as keyof AppSettings;
        prev[key] = localStorage.getItem(key) === "true";        
        return prev;
      });
    }
  }, []);

  useEffect((): void => {
    // console.log(expression);
    // console.log(type);
    // console.log(result);
  }, [expression, type]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      if (settings.enableCapitalize) {
        setExpression(e.target.value.toUpperCase());
      } else {
        setExpression(e.target.value);
      }
    },
    [expression]
  );

  const handleSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>): void => {
      setType(e.target.value as ExpressionTypes);
    },
    [type]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      let stackApp: StackApplication;

      switch (type) {
        case ExpressionTypes.Prefix:
          stackApp = new StackApplication(expression, settings);
          stackApp.setExpressionType(ExpressionTypes.Prefix);
          stackApp.conversion();
          setResult(stackApp.toPrefix());
          setStatements(stackApp.getStatements());
          break;
        case ExpressionTypes.Postfix:
          stackApp = new StackApplication(expression, settings);
          stackApp.conversion();
          setResult(stackApp.toPrefix());
          setStatements(stackApp.getStatements());
          break;
        default:
          setResult(null);
      }
    },
    [expression, type]
  );

  const handleCheck = useCallback(
    (
      { target: { checked } }: ChangeEvent<HTMLInputElement>,
      keyName: keyof AppSettings
    ): void => {
      setSettings((prev: Partial<AppSettings>): Partial<AppSettings> => {
        prev[keyName] = checked;
        localStorage.setItem(keyName, String(checked));
        return prev;
      });
    },
    [settings]
  );

  return (
    <ExpressionContext.Provider
      value={{
        expression,
        setExpression,
        type,
        setType,
        result,
        setResult,
        statements,
        setStatements,
        settings,
        setSettings,
        inputRef,
        handleChange,
        handleSelect,
        handleSubmit,
        handleCheck,
      }}
    >
      <section
        id="converter"
        className="w-full flex flex-col items-center justify-center"
      >
        <div className="w-full flex gap-8">
          <FormContainer
            attributes={{
              action: "#",
              className:
                "w-3/4 h-max flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 to-blue-300 p-12 rounded-xl shadow-xl border-8 border-white",
              onSubmit: handleSubmit,
            }}
          >
            <Form />
          </FormContainer>
          <SettingContainer
            attributes={{
              className:
                "w-1/4 p-4 flex flex-col items-start justify-center bg-gradient-to-r from-black to-neutral-900 rounded-xl border-8 border-white shadow-xl text-slate-50",
            }}
          >
            <SelectContainer
              attributes={{
                className: "mb-5 w-full block mx-auto text-black",
              }}
            >
              <Paragraph
                attributes={{
                  className: "text-slate-50 text-center italic mb-4",
                }}
              />
              <Select />
            </SelectContainer>
            <Checkboxes />
          </SettingContainer>
        </div>
        <ResultofExpression />
        <ExpressionTable />
      </section>
    </ExpressionContext.Provider>
  );
};

export default Converter;
