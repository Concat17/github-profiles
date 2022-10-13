export function Table(props: React.ComponentPropsWithoutRef<"table">) {
  const { children, className: classNameProps, ...rest } = props;
  return (
    <table className={`w-full text-green-100 ${classNameProps}`} {...rest}>
      {children}
    </table>
  );
}

export function THead(props: React.ComponentPropsWithoutRef<"thead">) {
  const { children, className: classNameProps, ...rest } = props;
  return (
    <thead className={` text-green-400 ${classNameProps}`} {...rest}>
      {children}
    </thead>
  );
}

interface TRProps extends React.ComponentPropsWithoutRef<"tr"> {
  i?: number;
}

export function TR(props: TRProps) {
  const { i, children, className: classNameProps, ...rest } = props;
  return (
    <tr
      className={`${
        i !== undefined && i % 2 === 0 ? "bg-gray-700" : "bg-transparent"
      } ${classNameProps}`}
      {...rest}
    >
      {children}
    </tr>
  );
}

export function TH(props: React.ComponentPropsWithoutRef<"th">) {
  const { children, className: classNameProps, ...rest } = props;
  return (
    <th
      className={`sticky top-0 bg-black z-50 px-2 py-2 ${classNameProps}`}
      {...rest}
    >
      {children}
    </th>
  );
}

export function TBody(props: React.ComponentPropsWithoutRef<"tbody">) {
  const { children, className: classNameProps, ...rest } = props;
  return (
    <tbody className={`${classNameProps}`} {...rest}>
      {children}
    </tbody>
  );
}

export function TD(props: React.ComponentPropsWithoutRef<"td">) {
  const { children, className: classNameProps, ...rest } = props;
  return (
    <td className={`border-gray-900  px-2 py-1 ${classNameProps}`} {...rest}>
      {children}
    </td>
  );
}
