import styles from "./styles.module.css";
type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="meuInput">{labelText}</label>
      <input className={styles.input} type={type} name="" id={id} {...rest} />
    </div>
  );
}
