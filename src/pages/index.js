import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const projects = data.allContentfulProject.edges;

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site. 🔥  </p>
      <p>Now go build something great.</p>
      {projects.map(project => (
        <img src={project.node.image.file.url} alt={project.node.title} />
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export const query = graphql`
  query allProjects {
    allContentfulProject {
      edges {
        node {
          title
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;