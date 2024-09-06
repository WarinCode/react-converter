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
import StackApplication from "../../libs/src/classes/StackApplication";
import { AppSettings, ToPostfix, ToPrefix } from "../../libs/src/types";
import ExpressionTypes from "../../libs/src/enums/ExpressionTypes";
import ExpressionContext from "../contexts/ExpressionContext";
import FormContainer from "../containers/FormContainer";
import SelectContainer from "../containers/SelectContainer";
import SettingContainer from "../containers/SettingContainer";
import TableContainer from "../containers/TableContainer";
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
    setType(localStorage.getItem("type") as ExpressionTypes);
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
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      if (settings.enableCapitalize) {
        setExpression(value.toUpperCase());
      } else {
        setExpression(value);
      }
    },
    [expression]
  );

  const handleSelect = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>): void => {
      setType(value as ExpressionTypes);
      localStorage.setItem("type", value);
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
          setResult(stackApp.toPostfix());
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
        <div className="w-full flex max-[950px]:flex-wrap gap-8">
          <FormContainer
            attributes={{
              action: "#",
              className:
                "w-3/4 max-[950px]:w-full max-[580px]:px-4 h-max flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 to-blue-300 py-12 rounded-xl shadow-xl border-8 border-white",
              onSubmit: handleSubmit,
            }}
          >
            <Form />
          </FormContainer>
          <SettingContainer
            attributes={{
              className:
                "w-1/4 max-[950px]:w-full max-[950px]:mt-12 p-4 flex flex-col items-start justify-center bg-gradient-to-r from-black to-neutral-900 rounded-xl border-8 border-white shadow-xl text-slate-50",
            }}
          >
            <SelectContainer
              attributes={{
                className: "mb-5 w-full block mx-auto text-black",
              }}
            >
              <Paragraph />
              <Select />
            </SelectContainer>
            <Checkboxes />
          </SettingContainer>
        </div>
        <ResultofExpression />
        <TableContainer
          attributes={{
            className: "border-2 border-black w-full h-max mt-16 table-auto",
          }}
        >
          <ExpressionTable />
          <caption className="text-2xl font-bold mb-4">
            ตารางการแปลงนิพจน์
          </caption>
        </TableContainer>
      </section>
    </ExpressionContext.Provider>
  );
};

export default Converter;
