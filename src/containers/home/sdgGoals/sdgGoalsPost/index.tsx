import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PostBannerCard from "../../../../components/post-banner-card/post-banner-card";
import { SdgGoalsPostWrapper, SdgGoalsPostRow } from "./style";

type SdgGoalsPostsProps = {};

const SdgGoalsPosts: React.FunctionComponent<SdgGoalsPostsProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
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
    <SdgGoalsPostWrapper>
      <SdgGoalsPostRow>
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
      </SdgGoalsPostRow>
    </SdgGoalsPostWrapper>
  );
};

export default SdgGoalsPosts;
