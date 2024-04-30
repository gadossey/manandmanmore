import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BannerPosts from "./banner-post";
import {
  BannerWrapper,
  BannerInner,
  BannerPostArea,
  TrendingPosts,
} from "./style";

type BannerProps = {};

const Banner: React.FunctionComponent<BannerProps> = () => {
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

  return (
    <BannerWrapper>
      <BannerInner>
        <BannerPostArea>
          <BannerPosts />
        </BannerPostArea>
        <TrendingPosts>
          <h1>
            We have helped {"\n"}
            save over two Million {"\n"}
            tCO2 since we established.{"\n"}
          </h1>
        </TrendingPosts>
      </BannerInner>
    </BannerWrapper>
  );
};

export default Banner;
