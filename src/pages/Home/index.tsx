import { Container } from "../../components/Container";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
