import Container from '@components/elements/Container/Container';
import NewSwitch from '@components/elements/Switch/Switch';
import { useTheme } from '@lib/theme/ThemeProvider';
import { Link } from 'gatsby';
import * as React from 'react';

const logoSrc = require(`@components/elements/Icon/icons/icon-logo.svg`)
  .default;

const links = [
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
];

const Navbar = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 bg-background w-full z-50 py-4">
      <Container className="flex justify-between max-w-screen-2xl items-center">
        <Link to="/">
          <img
            src={logoSrc}
            alt="icon-logo"
            style={{ maxWidth: '54px' }}
            className="transform transition-all duration-100 ease-out w-10 md:w-12"
          />
        </Link>
        <div className="flex">
          <ul className="flex space-x-6 mr-6">
            {links.map((l) => (
              <li key={l.label}>
                <Link className="text-sm" to={l.to}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <NewSwitch
            onChange={(e) => toggleTheme(e.target.checked)}
            checked={mode === 'dark'}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
