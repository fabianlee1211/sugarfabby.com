import Container from '@components/elements/Container/Container';
import NewSwitch from '@components/elements/Switch/Switch';
import { useTheme } from '@lib/theme/ThemeProvider';
import debounce from '@lib/utils/debounce';
import { motion, useViewportScroll } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';

const logoSrc = require(`@components/elements/Icon/icons/icon-logo.svg`);

const variants = {
  shrink: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  default: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
};

const links = [
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
];

const Navbar = () => {
  const { mode, toggleTheme } = useTheme();
  const { scrollY } = useViewportScroll();
  const [inProp, setInProp] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 0) {
        setInProp(true);
      } else if (scrollY.get() === 0) {
        setInProp(false);
      }
    };

    const unsubscribeScrollY = scrollY.onChange(debounce(handleScroll));

    return () => {
      unsubscribeScrollY();
    };
  }, []);

  return (
    <motion.nav
      animate={inProp ? 'shrink' : 'default'}
      className="fixed top-0 bg-background w-full z-50"
      variants={variants}
      style={{
        boxShadow: inProp ? 'var(--box-shadow)' : 'none',
      }}
    >
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
    </motion.nav>
  );
};

export default Navbar;
