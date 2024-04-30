import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PostBannerCard from "../../../../components/post-banner-card/post-banner-card";
import { BannerPostWrapper, BannerPostRow } from "./style";

type BannerPostsProps = {};

const BannerPosts: React.FunctionComponent<BannerPostsProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")

              cover {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <BannerPostWrapper>
      <BannerPostRow>
        {posts.map(({ node }: any) => {
          return (
            <PostBannerCard
              key={node.fields.slug}
              image={
                node.frontmatter.cover == null
                  ? null
                  : node.frontmatter.cover.childImageSharp.gatsbyImageData
              }
              url={node.fields.slug}
              date={node.frontmatter.date}
            />
          );
        })}
      </BannerPostRow>
    </BannerPostWrapper>
  );
};

export default BannerPosts;
