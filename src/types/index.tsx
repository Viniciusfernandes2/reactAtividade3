export interface RGBContextProps {
    r: number;
    g: number;
    b: number;
    setR: (value:number) => void;
    setG: (value:number) => void;
    setB: (value:number) => void;
    color: string;
}

export interface HSLAContextProps {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
    setHue: (value:number) => void;
    setSaturation: (value:number) => void;
    setLightness: (value:number) => void;
    setAlpha: (value:number) => void;
    color: string;
}

export interface CMYKContextProps {
    ciano: number;
    magenta: number;
    amarelo: number;
    preto: number;
    setCiano: (value:number) => void;
    setMagenta: (value:number) => void;
    setAmarelo: (value:number) => void;
    setPreto: (value:number) => void;
    color: string;
}

export interface InputProps {
    label: string;
    value: number;
    setValue: (value:number) => void;
    min: number;
    max: number;
}