interface InputProps {
  label: string;
}
export function Input({ label }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-medium text-gray-500">
        {label}
      </label>
      <input
        className="mt-1 h-11 rounded-md border border-gray-300 px-3 focus:outline-esmerald-600"
        type="text"
        name="email"
        id="email"
      />
    </div>
  );
}
