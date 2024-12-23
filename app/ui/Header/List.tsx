export default function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex flex-row w-full justify-around md:w-auto md:justify-end gap-2 list-none">
      {children}
    </ul>
  );
}
