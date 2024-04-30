import * as React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import GatsbyImage from "../gatsby-image";
import Button from "../button/button";
import {
  PostSlideCardWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  PostTags,
  PostMeta,
  ReadMore,
  Excerpt,
} from "./post-slide-card.style";
interface PostSlideCardProps {
  image?: any;
  title: string;
  description?: string;
  url: string;
  tags?: [];
  className?: string;
}

const PostSlideCard: React.FunctionComponent<PostSlideCardProps> = ({
  image,
  title,
  description,
  url,
  tags,
  className,
  ...props
}) => {
  const addClass = ["featured_card"];

  if (className) {
    addClass.push(className);
  }

  return (
    <PostSlideCardWrapper className={addClass.join(" ")} {...props}>
      <PostDetails className="post_details">
        <PostMeta>
          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag: string, index: number) => (
                <React.Fragment key={index}>
                  {!!index && <span key={`sep-${index}`}> ,</span>}
                  <Link
                    key={index}
                    to={`/tags/${_.kebabCase(tag)}/`}
                  >{`${tag}`}</Link>
                </React.Fragment>
              ))}
            </PostTags>
          )}
        </PostMeta>

        <PostTitle className="post_title">{title}</PostTitle>
        {description && (
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            className="excerpt"
          />
        )}
      </PostDetails>

      <PostPreview className="post_preview">
        <GatsbyImage src={image} alt="post preview" backgroundColor="#EAE8E9" />
      </PostPreview>
    </PostSlideCardWrapper>
  );
};

export default PostSlideCard;
