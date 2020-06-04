import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => {

  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
    </Layout>
  );
};


export default AboutPage;