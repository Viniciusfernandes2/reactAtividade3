import Input from "../Input";
import useCMYK from "../../hooks/useCMYK";
import Title from "../Title";
import Line from "../Line";
import Block from "../Block";

export default function CMYKColor() {
  const {
    ciano,
    magenta,
    amarelo,
    preto,
    setCiano,
    setMagenta,
    setAmarelo,
    setPreto,
    color,
  } = useCMYK();
  
  return (
    <Block color={color}>
      <Title>CMYK - Cyan, Magentta, Yellow, Black</Title>
      <Line>
        <Input label="Ciano" value={ciano} setValue={setCiano} min={0} max={100} />
        <Input label="Magenta" value={magenta} setValue={setMagenta} min={0} max={100} />
        <Input label="Amarelo" value={amarelo} setValue={setAmarelo} min={0} max={100} />
        <Input label="Preto" value={preto} setValue={setPreto} min={0} max={100} />
      </Line>
    </Block>
  );
}