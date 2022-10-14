type InputProps = React.ComponentPropsWithoutRef<"input">;

export function Input(props: InputProps) {
  const { children, className: classNameProps, ...rest } = props;
  return <input className={`px-2  ${classNameProps}`} {...rest} />;
}
