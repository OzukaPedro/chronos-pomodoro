import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  return (
    <>
      <div>
        <DefaultInput
          id="meuInput"
          placeholder="Digite algo"
          type="number"
          labelText="Task"
        />
      </div>
      <div></div>
      <div>
        <Cycles />
      </div>
      <div>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </>
  );
}
