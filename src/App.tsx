import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/globals.css";
import "./styles/theme.css";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Container>
        <Logo />

        <Menu />

        <CountDown />

        <DefaultInput
          id="meuInput"
          placeholder="Digite algo"
          type="number"
          labelText="Task"
        />

        <Cycles />

        <DefaultButton icon={<PlayCircleIcon />} />

        <Footer />
      </Container>
    </>
  );
}

export default App;
