export default function List({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-row gap-2 list-none">{children}</ul>;
}
