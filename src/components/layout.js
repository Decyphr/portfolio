/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from 'styled-components';

import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import { theme } from "./style/theme";
import { motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
    }
  },
  hidden: { opacity: 0, y: 25 }
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{ paddingTop: 125, minHeight: 'calc(100vh - 85px)' }}>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          {children}
        </motion.div>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
