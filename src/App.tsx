import { ReactElement, useEffect } from "react";
import AppContainer from "./components/containers/AppContainer";
import Converter from "./components/ui/Converter";

const App = (): ReactElement<HTMLDivElement> => {

  useEffect((): void => {
    const keys: string[] = ["enableIndentation", "enableSeparator", "enableCapitalize"];
    for(const key of keys){
      if(localStorage.getItem(key) === null){
        localStorage.setItem(key, "false")
      }
    }
  }, []);

  return (
    <AppContainer attributes={{ className: "w-full h-full p-12 bg-zinc-100" }}>
      <Converter />
    </AppContainer>
  );
};

export default App;
