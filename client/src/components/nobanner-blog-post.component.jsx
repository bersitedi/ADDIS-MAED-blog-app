/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getDay } from "../common/date";

const MinimalBlogPost = ({ blog, index }) => {
  let {
    title,
    blog_id: id,
    author: {
      personal_info: { fullname, username, profile_img },
    },
    publishedAt,
  } = blog;

  return (
    <Link to={`/blog/${id}`} className="flex gap-5 mb-8 px-4 md:px-0">
      <h1 className="blog-index">{index < 10 ? "0" + (index + 1) : index}</h1>

      <div>
        <div className="flex gap-2 items-center mb-5">
          <img src={profile_img} className="w-6 h-6 rounded-full" />
          <p className="line-clamp-1 text-white">
            {fullname} @{username}
          </p>
          <p className="min-w-fit text-brown">{getDay(publishedAt)}</p>
        </div>

        <h1 className="blog-title text-black md:text-white">{title}</h1>
      </div>
    </Link>
  );
};

export default MinimalBlogPost;
