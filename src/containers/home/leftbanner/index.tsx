import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import LeftBannerPosts from "./leftbannerPost";
import TrendingPost from "../../../components/trending-post/trending-post";
import {
  LeftBannerWrapper,
  LeftBannerInner,
  LeftBannerPostArea,
  TrendingPosts,
} from "./style";

type LeftBannerProps = {};

const LeftBanner: React.FunctionComponent<LeftBannerProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 7
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
    <LeftBannerWrapper>
      <LeftBannerInner>
        <TrendingPosts>
          <h1>
            The enterprise target {"\n"} includes homes, restaurants, peri-urban
            and rural areas where charcoal and fire wood is predominantly the
            source of fuel.
          </h1>
        </TrendingPosts>
        <LeftBannerPostArea>
          <LeftBannerPosts />
        </LeftBannerPostArea>
      </LeftBannerInner>
    </LeftBannerWrapper>
  );
};

export default LeftBanner;
