import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/globals.css";
import "./styles/theme.css";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <DefaultInput
          id="meuInput"
          placeholder="Digite algo"
          type="number"
          labelText="Task"
        />
      </Container>
    </>
  );
}

export default App;
