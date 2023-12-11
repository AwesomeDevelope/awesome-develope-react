import { Link, Nav } from './Navigation.styled';

const Navigation = () => {
  const headerNav = [
    { name: 'Contacts', href: '/contacts' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <Nav>
      {headerNav.map(({ name, href }) => (
        <Link key={name + href} to={href}>
          {name}
        </Link>
      ))}
    </Nav>
  );
};

export default Navigation;
