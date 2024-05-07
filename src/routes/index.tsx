import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";
import RGBColor from "../components/RGBColor";
import HSLAColor from "../components/HSLAColor";
import CMYKColor from "../components/CMYKColor";
import { RGBProvider } from "../contexts/RGBContext";
import { HSLAProvider } from "../contexts/HSLAContext";
import { CMYKProvider } from "../contexts/CMYKContext";

export default function Rotas() {
  return (
    <PageSld>
      <Router>
        <Menu />
        <BodySld>
          <RGBProvider>
            <HSLAProvider>
              <CMYKProvider>
                <Routes>
                  <Route path="/rgb" element={<RGBColor />} />
                  <Route path="/hsla" element={<HSLAColor />} />
                  <Route path="/cmyk" element={<CMYKColor />} />
                </Routes>
              </CMYKProvider>
            </HSLAProvider>
          </RGBProvider>
        </BodySld>
      </Router>
    </PageSld>
  );
}

const PageSld = styled.div`
  display: flex;
`;

const BodySld = styled.div`
  position: absolute; /* Alterado para position: absolute */
  top: calc(50% + 60px); /* Posiciona o elemento no meio verticalmente e Ajusta o valor para compensar a altura do menu */
  left: 50%; /* Posiciona o elemento no meio horizontalmente */
  transform: translate(-50%, -50%); /* Move o elemento de volta metade de sua própria largura e altura */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

