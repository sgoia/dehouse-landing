/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { NavLink } from 'components/link';
import menuItems from './header.data';
import theme from 'theme/index';

const Navbar = ({ isSticky, isMobile, handleCloseMenu }) => {
  return (
    <Box
      as="nav"
      sx={styles.navbar}
      className={`navbar${isMobile ? ' is-mobile' : ''}${
        isSticky ? ' is-sticky' : ''
      }`}
    >
      {menuItems.map(({ path, label }, i) => (
        <NavLink key={i} path={path} label={label} onClick={handleCloseMenu} />
      ))}
    </Box>
  );
};

export default Navbar;

const styles = {
  navbar: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 4,
    display: [null, null, null, null, null, 'flex'],
    alignItems: [null, null, null, 'center'],
    flexGrow: [null, null, null, 1],
    a: {
      color: 'white',
      cursor: 'pointer',
      '+ a': {
        ml: [null, null, null, null, null, 6],
      },
      ':hover': {
        transitionDuration: '0.2s',
        transform: 'scale(1.1)',
      }
    },
    '@media only screen and (max-width: 1024px)': {
      position: 'absolute',
      backgroundColor: theme.colors.taikaiGray, //'white',
      boxShadow: '0px 11px 30px rgba(51, 83, 145, 0.07)',
      width: '100%',
      left: 0,
      top: 70,
      opacity: 0,
      visibility: 'hidden',
      transform: 'scaleY(0)',
      transformOrigin: 'top left 0',
      transition: '0.3s ease 0s',
      '&.is-sticky': {
        borderTop: '1px solid #f3f3f3',
      },
      '&.is-mobile': {
        opacity: 1,
        visibility: 'visible',
        transform: 'scaleY(1)',
      },
      a: {
        fontWeight: 700,
        lineHeight: 2,
        color: 'textSecondary',
        display: 'block',
        padding: 3,
        '+ a': {
          borderTop: '1px solid #f3f3f3',
        },
      },
    },
    '&.is-sticky': {
      top: 60,
      a: {
        color: 'text',
      },
      '.active': {
        color: 'primary',
      },
    },
  },
};
