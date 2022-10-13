type LoadingSpinProps = {
  size: "sm" | "lg";
};

export function LoadingSpin({ size = "lg" }: LoadingSpinProps) {
  const sizes = {
    sm: "w-5 h-5",
    lg: "w-12 h12",
  };
  return (
    <div
      className={`${sizes[size]} border-t-green-300 border-green-700 border-solid border-2 rounded-full animate-spin`}
    />
  );
}
