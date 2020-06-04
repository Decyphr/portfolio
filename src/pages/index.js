import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectBanner from "../components/Home/ProjectBanner";
import Hero from "../components/Home/Hero";
import { Button } from '../components/style/buttons';
import { FlexBox } from "../components/style/containers";


const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Hero />
      <ProjectBanner projects={data.allContentfulProject.edges} />
      <FlexBox justify="center" margin="100px auto">
        <Link to="/projects">
          <Button>See More</Button>
        </Link>
      </FlexBox>
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