import { ReactElement, useEffect } from "react";
import AppContainer from "./components/containers/AppContainer";
import Converter from "./components/ui/Converter";
import ExpressionTypes from "./libs/src/enums/ExpressionTypes";

const App = (): ReactElement<HTMLDivElement> => {

  useEffect((): void => {
    if(localStorage.getItem("type") === null){
      localStorage.setItem("type", ExpressionTypes.Postfix);
    }
    const keys: string[] = ["enableIndentation", "enableSeparator", "enableCapitalize"];
    for(const key of keys){
      if(localStorage.getItem(key) === null){
        localStorage.setItem(key, "false")
      }
    }
  }, []);

  return (
    <AppContainer attributes={{ className: "w-full h-full p-12 max-lg:p-8 bg-zinc-100" }}>
      <Converter />
    </AppContainer>
  );
};

export default App;
