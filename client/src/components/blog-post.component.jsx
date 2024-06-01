/* eslint-disable react/prop-types */
import { getDay } from "../common/date";
import { Link } from "react-router-dom";

const BlogPostCard = ({ content, author, className }) => {
  let {
    publishedAt,
    tags,
    title,
    des,
    banner,
    activity: { total_likes },
    blog_id: id,
  } = content;
  let { fullname, profile_img, username } = author;

  return (
    <Link
      to={`/blog/${id}`}
      className="flex flex-col gap-4 items-center border border-grey p-4 rounded-md"
    >
      <div className="w-full">
        <div className={`w-full ${className} bg-grey mb-4`}>
          <img
            src={banner}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>

        <div className="flex gap-2 items-center mb-7">
          <img src={profile_img} className="w-6 h-6 rounded-full" />
          <p className="line-clamp-1">
            {fullname} @{username}
          </p>
        </div>

        <div className="flex gap-4 items-center mb-4">
          <p className="min-w-fit text-right">{getDay(publishedAt)}</p>
          <span className="ml-3 flex items-center gap-2 text-dark-grey">
            <i className="fi fi-rr-heart text-xl"></i>
            {total_likes}
          </span>
          <span className="btn-light py-1 px-4">{tags[0]}</span>
        </div>
        <h1 className="blog-title mb-2">{title}</h1>
        <p className="text-xl font-gelasio leading-7 line-clamp-2">{des}</p>
      </div>
    </Link>
  );
};

export default BlogPostCard;
