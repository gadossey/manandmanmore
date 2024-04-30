import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SdgGoalsPosts from "./sdgGoalsPost";
import TrendingPost from "../../../components/trending-post/trending-post";
import {
  SdgGoalsWrapper,
  SdgGoalsInner,
  SdgGoalsPostArea,
  TrendingPosts,
} from "./style";

type SdgGoalsProps = {};

const SdgGoals: React.FunctionComponent<SdgGoalsProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 6
        filter: { frontmatter: { tags: { eq: "trending" } } }
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;
  return (
    <SdgGoalsWrapper>
      <SdgGoalsInner>
        <TrendingPosts>
          <h1>
            We have helped {"\n"}
            save over two Million {"\n"}
            tCO2 since we established.{"\n"}
          </h1>
        </TrendingPosts>
        <SdgGoalsPostArea>
          <SdgGoalsPosts />
        </SdgGoalsPostArea>
      </SdgGoalsInner>
    </SdgGoalsWrapper>
  );
};

export default SdgGoals;
