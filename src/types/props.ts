import {
  ReactNode,
  FormHTMLAttributes,
  HTMLAttributes,
  Attributes,
  ButtonHTMLAttributes,
} from "react";
import { CheckboxObject } from ".";
import { ToPostfix, ToPrefix } from "../libs/src/types";

interface BaseContainer {
  children: ReactNode;
}
interface BaseAttributes<T = HTMLElement> {
  attributes?: HTMLAttributes<T>;
}

export interface AppContainerProps<T = HTMLElement>
  extends BaseContainer,
    BaseAttributes<T> {}
export interface FormContainerProps<T = HTMLElement> extends BaseContainer {
  attributes?: FormHTMLAttributes<T>;
}
export interface SelectContainerProps<T = HTMLElement>
  extends BaseContainer,
    BaseAttributes<T> {}
export interface SettingContainerProps<T = HTMLElement> extends BaseContainer, BaseAttributes<T> {};
 
    
export interface CheckboxProps extends CheckboxObject {
  id: string;
}
export interface ButtonProps<T> {
  attributes?: ButtonHTMLAttributes<T>;
  text: string;
}
export interface ResultofExpressionProps<T = Attributes>
  extends BaseAttributes<T> {}
export interface ParagraphProps<T = HTMLElement> extends BaseAttributes<T>{};
export interface TableRowProps<T = HTMLElement> extends BaseAttributes<T>{
  statement: ToPostfix | ToPrefix;
};