import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ siteTitle }) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <Nav
      style={{
        marginBottom: `1.45rem`,
      }}

    >
      <Logo open={isOpen}><Link to="/"><h1>BH</h1></Link></Logo>
      <ToggleNav onClick={() => toggleOpen(!isOpen)} open={isOpen}>
        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.785767" y1="0.642822" x2="25.5001" y2="0.642822" stroke="#1EE2BC" stroke-linecap="round" />
          <line x1="0.785767" y1="9.64282" x2="25.5001" y2="9.64282" stroke="#1EE2BC" stroke-linecap="round" />
          <line x1="0.785767" y1="18.6428" x2="25.5001" y2="18.6428" stroke="#1EE2BC" stroke-linecap="round" />
        </svg>
      </ToggleNav>
      <AnimatePresence>
        {isOpen && (
          <div style={{ position: "absolute", top: 0, left: 0, width: '100%' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Menu onClick={() => toggleOpen(!isOpen)}>
                <ul>
                  <motion.li initial={{ x: 25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                    <Link to="/">Home</Link>
                  </motion.li>
                  <motion.li initial={{ x: 25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.15 }}>
                    <Link to="/about">About</Link>
                  </motion.li>
                  <motion.li initial={{ x: 25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}>
                    <Link to="/projects">Projects</Link>
                  </motion.li>
                  <motion.li initial={{ x: 25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.45 }}>
                    <Link to="/contact">Contact</Link>
                  </motion.li>
                </ul>
              </Menu>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const Nav = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 25px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 35px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border 1px solid ${({ theme }) => theme.colors.highlight};
  z-index: 999;

  a {
    text-decoration: none;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: 700;
    font-size: 22px;
    display: block;
    margin: 0;
    text-decoration: none;
    color: ${({ theme, open }) => !open ? theme.colors.primary : theme.colors.secondary};
  } 
`;

const ToggleNav = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme, open }) => !open ? theme.colors.primary : theme.colors.highlight};
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.colors.primary};
  transition: 0.3s;
  z-index: 100;
  
  &:hover {
    box-shadow: 2px 2px 6px ${({ theme }) => theme.colors.primary};
  }

  &:active {
    box-shadow: none;
  }

  &:focus {
    outline: none;
    
  }
`;

const Menu = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style-type: none;
    text-align: center;
  }

  li {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 5rem 0;

    a {
      color: ${({ theme }) => theme.colors.secondary};
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 800;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default Header;
