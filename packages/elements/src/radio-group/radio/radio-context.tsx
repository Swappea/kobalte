import { Accessor, createContext, useContext } from "solid-js";

export interface RadioDataSet {
  "data-valid": string | undefined;
  "data-invalid": string | undefined;
  "data-checked": string | undefined;
  "data-disabled": string | undefined;
  "data-hover": string | undefined;
  "data-focus": string | undefined;
}

export interface RadioContextValue {
  value: Accessor<string>;
  dataset: Accessor<RadioDataSet>;
  isSelected: Accessor<boolean>;
  isDisabled: Accessor<boolean>;
  setIsFocused: (isFocused: boolean) => void;
}

export const RadioContext = createContext<RadioContextValue>();

export function useRadioContext() {
  const context = useContext(RadioContext);

  if (context === undefined) {
    throw new Error("[kobalte]: `useRadioContext` must be used within a `Radio` component");
  }

  return context;
}