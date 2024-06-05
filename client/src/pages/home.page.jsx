import axios from "axios";
import AnimationWrapper from "../common/page-animation";
import InPageNavigation, {
  activeTabRef,
} from "../components/inpage-navigation.component";
import { useEffect, useState } from "react";
import Loader from "../components/loader.component";
import BlogPostCard from "../components/blog-post.component";
import MinimalBlogPost from "../components/nobanner-blog-post.component";
import NoDataMessage from "../components/nodata.component";
import { filterPaginationData } from "../common/filter-pagination-data";
import LoadMoreDataBtn from "../components/load-more.component";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/hero";

const HomePage = () => {
  const [blogs, setBlog] = useState(null);
  const [trendingBlogs, setTrendingBlog] = useState(null);
  const [pageState, setPageState] = useState("home");

  const categories = [
    "BBQ and Grilling",
    "Baking",
    "Seafood",
    "Smoothies",
    "Vegan",
    "Italian Cuisine",
    "Lunch",
    "Indian Cuisine",
    "Dinner",
    "Desserts",
    "Snacks/Appetizers",
    "Breakfast/Brunch",
  ];

  const fetchLatestBlogs = ({ page = 1 }) => {
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + "/latest-blogs", { page })
      .then(async ({ data }) => {
        let formattedData = await filterPaginationData({
          state: blogs,
          data: data.blogs,
          page,
          countRoute: "/all-latest-blogs-count",
        });

        setBlog(formattedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchBlogsByCategory = ({ page = 1 }) => {
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blogs", {
        tag: pageState,
        page,
      })
      .then(async ({ data }) => {
        let formattedData = await filterPaginationData({
          state: blogs,
          data: data.blogs,
          page,
          countRoute: "/search-blogs-count",
          data_to_send: { tag: pageState },
        });

        setBlog(formattedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchTrendingBlogs = () => {
    axios
      .get(import.meta.env.VITE_SERVER_DOMAIN + "/trending-blogs")
      .then(({ data }) => {
        setTrendingBlog(data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadBlogByCategory = (category) => {
    const selectedCategory = category.toLowerCase();

    setBlog(null);

    if (pageState === selectedCategory) {
      setPageState("home");
      return;
    }

    setPageState(selectedCategory);
  };

  useEffect(() => {
    activeTabRef.current.click();

    if (pageState === "home") {
      fetchLatestBlogs({ page: 1 });
    } else {
      fetchBlogsByCategory({ page: 1 });
    }

    if (!trendingBlogs) {
      fetchTrendingBlogs();
    }
  }, [pageState]);

  return (
    <AnimationWrapper>
      <Hero />
      <div className="h-cover flex justify-center gap-10 py-4">
        <div className="w-full md:px-[7vw] py-4">
          <InPageNavigation
            routes={["home", "trending", "about", "contact"]}
            defaultHidden={["trending"]}
          >
            {{
              home: (
                <>
                  {blogs == null ? (
                    <Loader />
                  ) : blogs.results.length ? (
                    <div className="flex flex-wrap -mx-2">
                      {blogs.results.map((blog, i) => {
                        return (
                          <div key={i} className="w-full lg:w-1/2 px-2 mb-4">
                            <AnimationWrapper
                              transition={{ duration: 1, delay: i * 0.1 }}
                            >
                              <BlogPostCard
                                content={blog}
                                author={blog.author.personal_info}
                                className="h-72 md:h-80 lg:h-96"
                              />
                            </AnimationWrapper>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <NoDataMessage message="No blogs published" />
                  )}
                  <LoadMoreDataBtn
                    state={blogs}
                    fetchDataFun={
                      pageState === "home"
                        ? fetchLatestBlogs
                        : fetchBlogsByCategory
                    }
                  />
                </>
              ),
              trending: (
                <>
                  {trendingBlogs == null ? (
                    <Loader />
                  ) : trendingBlogs.length ? (
                    trendingBlogs.map((blog, i) => {
                      return (
                        <AnimationWrapper
                          transition={{ duration: 1, delay: i * 0.1 }}
                          key={i}
                        >
                          <MinimalBlogPost blog={blog} index={i} />
                        </AnimationWrapper>
                      );
                    })
                  ) : (
                    <NoDataMessage message="No trending blogs" />
                  )}
                </>
              ),
              about: <About />,
              contact: <Contact />,
            }}
          </InPageNavigation>
        </div>
        <div
          className="relative min-w-[40%] md:min-w-[400px] max-w-min h-full border-l border-grey pl-8 pt-[43px] pb-[45px] max-md:hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507273026339-31b655f3752d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative flex flex-col gap-10">
            <div>
              <h1 className="font-medium text-xl text-white mb-8">
                Stories from all interests
              </h1>
              <div className="flex gap-3 flex-wrap">
                {categories.map((category, i) => {
                  return (
                    <button
                      onClick={() => loadBlogByCategory(category)}
                      className={
                        "tag " +
                        (pageState === category.toLowerCase()
                          ? "bg-brown text-white bg-opacity-40"
                          : "")
                      }
                      key={i}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className="font-medium text-xl mb-8 text-white">
                Trending
                <i className="fi fi-rr-arrow-trend-up"></i>
              </h1>
              {trendingBlogs == null ? (
                <Loader />
              ) : trendingBlogs.length ? (
                trendingBlogs.map((blog, i) => {
                  return (
                    <AnimationWrapper
                      transition={{ duration: 1, delay: i * 0.1 }}
                      key={i}
                    >
                      <MinimalBlogPost blog={blog} index={i} />
                    </AnimationWrapper>
                  );
                })
              ) : (
                <NoDataMessage message="No trending blogs" />
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default HomePage;
