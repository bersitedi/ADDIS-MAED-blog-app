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
      className={`border-b border-gray-300 pb-5 mb-4 ${className}`}
    >
      <div className="w-full mb-4">
        <img src={banner} className="w-full h-56 object-cover" alt={title} />
      </div>
      <div className="flex flex-col px-4">
        <div className="flex gap-2 items-center mb-2">
          <img
            src={profile_img}
            className="w-6 h-6 rounded-full"
            alt={fullname}
          />
          <p className="line-clamp-1">
            {fullname} @{username}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <p className="min-w-fit">{getDay(publishedAt)}</p>
            <span className="flex items-center gap-2 text-gray-600">
              <i className="fi fi-rr-heart text-xl"></i>
              {total_likes}
            </span>
            <span className="bg-gray-200 rounded-full py-1 px-4">
              {tags[0]}
            </span>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-xl leading-4 mb-4 line-clamp-2">{des}</p>
      </div>
    </Link>
  );
};

export default BlogPostCard;
