import List from './List';
import ListItem from './ListItem';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between md:h-20 content-center items-center max-w-6xl m-auto mb-8 mt-8 md:mb-12 md:p-8">
      <h1 className="content-center font-bold hidden md:block text-norwrap">
        <em>Szvetlin Tanyi</em>
      </h1>
      <nav className="flex sm:mt-4 md:mt-0 md:ml-4 w-full md:w-auto">
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
