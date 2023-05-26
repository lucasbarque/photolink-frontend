interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <div className="h-screen w-screen">{children}</div>;
}
