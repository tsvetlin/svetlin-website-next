export default function ListItem({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <li className="content-center ml-8">
      <a className="underline-effect" href={href}>
        {text}
      </a>
    </li>
  );
}
