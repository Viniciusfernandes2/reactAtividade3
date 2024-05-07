import { createContext, useState } from "react";
import { CMYKContextProps } from "../types";

export const CMYKContext = createContext({} as CMYKContextProps);

export function CMYKProvider({ children }: any) {
  const [ciano, setCiano] = useState(0);
  const [magenta, setMagenta] = useState(0);
  const [amarelo, setAmarelo] = useState(0);
  const [preto, setPreto] = useState(0);
  const r = 255 * (1 - ciano/100) * (1 - preto/100);
  const g = 255 * (1 - magenta/100) * (1 - preto/100);
  const b = 255 * (1 - amarelo/100) * (1 - preto/100);
  const color = `rgb(${r}, ${g}, ${b})`;

  return (
    <CMYKContext.Provider
      value={{
        ciano,
        magenta,
        amarelo,
        preto,
        setCiano,
        setMagenta,
        setAmarelo,
        setPreto,
        color,
      }}
    >
      {children}
    </CMYKContext.Provider>
  );
}
