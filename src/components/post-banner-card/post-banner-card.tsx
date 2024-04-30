import * as React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import GatsbyImage from "../gatsby-image";
import { PostBannerCardWrapper, PostPreview } from "./post-banner-card.style";

interface PostBannerCardProps {
  image?: any;
  url: string;
  date?: string;
  className?: string;
  overlay?: boolean;
}

const PostBannerCard: React.FunctionComponent<PostBannerCardProps> = ({
  image,
  url,
  date,
  className,
  overlay,
  ...props
}) => {
  const addClass = ["post_banner_card"];

  if (overlay == true) {
    addClass.push("overlay");
  }

  if (className) {
    addClass.push(className);
  }

  return (
    <PostBannerCardWrapper className={addClass.join(" ")} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            <GatsbyImage src={image} alt="post preview" />
          </Link>
        </PostPreview>
      )}
    </PostBannerCardWrapper>
  );
};

export default PostBannerCard;
