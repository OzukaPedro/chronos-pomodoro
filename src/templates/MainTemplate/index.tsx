import { Menu } from "lucide-react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />

        <Menu />

        <CountDown />

        {children}

        <Footer />
      </Container>
    </>
  );
}
