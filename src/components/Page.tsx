export function Page(props: React.ComponentPropsWithoutRef<"div">) {
  const { children, className: classNameProps, ...rest } = props;
  return (
    <div
      className={`flex flex-col bg-gray-800 h-full px-32 ${classNameProps}`}
      {...rest}
    >
      {children}
    </div>
  );
}
