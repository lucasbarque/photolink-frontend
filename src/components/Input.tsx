interface InputProps {
  label: string;
}
export function Input({ label }: InputProps) {
  return (
    <>
      <label htmlFor="email">{label}</label>
      <input
        className="h-11 border border-gray-400"
        type="text"
        name="email"
        id="email"
      />
    </>
  );
}
