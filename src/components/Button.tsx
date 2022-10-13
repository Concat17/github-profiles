import { ReactElement, useLayoutEffect, useRef, useState } from "react";

import { LoadingSpin } from "./LoadingSpin";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  icon?: ReactElement;
  isLoading?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    isLoading,
    icon,
    children,
    className: classNameProps,
    ...rest
  } = props;

  // save button width while loading spinner is visible
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (ref.current?.offsetWidth) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  return (
    <button
      ref={ref}
      className={`flex justify-center h-8 py-1 px-6 w-fit
       ${icon ? "pl-1" : ""}
       text-green-400 border-green-400 hover:bg-green-900 hover:text-green-200
       border-2 border-solid rounded ${classNameProps}`}
      style={width > 0 ? { width: `${width}px` } : {}}
      {...rest}
    >
      {isLoading ? (
        <LoadingSpin size="sm" />
      ) : (
        <>
          {icon && <div className="mr-2 "> {icon}</div>}
          {children}
        </>
      )}
    </button>
  );
}
