import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => {

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Let's Talk.</h1>
    </Layout>
  );
};


export default ContactPage;