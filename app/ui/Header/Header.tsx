import List from './List';
import ListItem from './ListItem';

export default function Header() {
  return (
    <header className="flex flex-row justify-between h-20 content-center max-w-6xl m-auto mb-12">
      <h1 className="content-center font-bold">
        <em>Szvetlin Tanyi</em>
      </h1>
      <nav className="flex">
        <List>
          <ListItem href="#about" text="About" />
          <ListItem href="#experience" text="Experience" />
          <ListItem href="#projects" text="Projects" />
          <ListItem href="#personal" text="Personal" />
        </List>
      </nav>
    </header>
  );
}
