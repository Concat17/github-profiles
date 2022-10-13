import { ReactElement } from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  icon?: ReactElement;
}

export function Button(props: ButtonProps) {
  const { icon, children, className: classNameProps, ...rest } = props;
  return (
    <button
      className={`flex  ml-5 py-1 px-6 ${
        icon ? "pl-1" : ""
      } text-green-400 border-green-400 hover:bg-green-900 border-2 border-solid rounded ${classNameProps}`}
      {...rest}
    >
      {icon && <div className="mr-2 "> {icon}</div>}

      {children}
    </button>
  );
}
