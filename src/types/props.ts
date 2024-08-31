import {
  ReactNode,
  FormHTMLAttributes,
  HTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import { CheckboxObject } from ".";
import { ToPostfix, ToPrefix } from "../libs/src/types";

interface BaseContainer {
  children: ReactNode;
}
interface BaseAttributes<T extends HTMLElement = HTMLElement> {
  attributes?: HTMLAttributes<T>;
}

export interface AppContainerProps<T extends HTMLElement = HTMLElement>
  extends BaseContainer,
    BaseAttributes<T> {}
export interface FormContainerProps<T extends HTMLElement = HTMLElement> extends BaseContainer {
  attributes?: FormHTMLAttributes<T>;
}
export interface SelectContainerProps<T extends HTMLElement = HTMLElement>
  extends BaseContainer,
    BaseAttributes<T> {}
export interface SettingContainerProps<T extends HTMLElement = HTMLElement> extends BaseContainer, BaseAttributes<T> {};
export interface TableContainerProps<T extends HTMLElement = HTMLElement> extends BaseContainer, BaseAttributes<T> {}  
    
export interface CheckboxProps extends CheckboxObject {
  id: string;
}
export interface ButtonProps<T> {
  attributes?: ButtonHTMLAttributes<T>;
  text: string;
}
export interface ResultofExpressionProps<T extends HTMLElement = HTMLElement>
  extends BaseAttributes<T> {}
export interface ParagraphProps<T extends HTMLElement = HTMLElement> extends BaseAttributes<T>{};
export interface TableRowProps<T extends HTMLElement = HTMLElement> extends BaseAttributes<T>{
  statement: ToPostfix | ToPrefix;
};
export interface TdContentProps<T extends HTMLElement = HTMLElement> extends BaseAttributes<T>{
  content: any;
};