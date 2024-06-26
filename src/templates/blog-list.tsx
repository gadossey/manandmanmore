import * as React from 'react';
import { graphql } from 'gatsby';
import PostCard from '../components/post-card/post-card';
import Pagination from '../components/pagination/pagination';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import { BlogPostsWrapper, PostRow, PostCol } from './templates.style';

const BlogList = (props: any) => {
	const { data } = props;
	const Posts = data.allMarkdownRemark.edges;
	const { currentPage, numPages } = props.pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage =
		currentPage - 1 === 1 ? '/page/1' : `/page/${(currentPage - 1).toString()}`;
	const nextPage = `/page/${(currentPage + 1).toString()}`;
	const PrevLink = !isFirst && prevPage;
	const NextLink = !isLast && nextPage;

	return (
		<Layout>
			<SEO title={`Page ${currentPage}`} />

			<BlogPostsWrapper>
				<PostRow>
					{Posts.map(({ node }: any) => {
						return (
							<PostCol key={node.fields.slug}>
								<PostCard
									title={node.frontmatter.title || node.fields.slug}
									image={
										node.frontmatter.cover == null
											? null
											: node.frontmatter.cover.childImageSharp.gatsbyImageData
									}
									url={node.fields.slug}
									date={node.frontmatter.date}
									tags={node.frontmatter.tags}
									// readTime={node.fields.readingTime.text}
								/>
							</PostCol>
						);
					})}
				</PostRow>

				<Pagination
					prevLink={PrevLink}
					nextLink={NextLink}
					currentPage={`${currentPage}`}
					totalPage={`${numPages}`}
				/>
			</BlogPostsWrapper>
		</Layout>
	);
};

export default BlogList;

export const pageQuery = graphql`
	query($skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
			}
		}
		sitePage {
			path
		}
		allMarkdownRemark(
			sort: { frontmatter: { date: DESC } }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					excerpt(pruneLength: 300)
					fields {
						slug
						
					}
					frontmatter {
						date(formatString: "DD [<span>] MMMM [</span>]")
						title
						description
						tags
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
`;
