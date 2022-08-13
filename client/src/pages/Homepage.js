import { Sidebar, Trending, ImageTweet, TweetsSection } from "../components";
import { TbMoonStars } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineImage, MdOutlineBarChart } from "react-icons/md";
import { AiOutlineFileGif, AiOutlineCalendar } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { createPost, getAllPosts } from "../action/posts";

const Homepage = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const [tweetHandle, setTweetHandle] = useState({
    tweet: "",
    image: "",
    gif: "",
    emoji: "",
  });
  const [openItems, setOpenItems] = useState({
    image: false,
    emoji: false,
  });

  useEffect(() => {
    if (!auth) {
      return navigate("/auth");
    }

    dispatch(getAllPosts());
  }, [auth]);

  const handleTweet = (e) => {
    e.preventDefault();
    dispatch(createPost(tweetHandle, auth?.token));
    setTweetHandle({
      tweet: "",
      image: "",
      gif: "",
      emoji: "",
    });
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[29%] flex justify-end items-start border-r border-gray-200 px-14 py-7">
        <Sidebar />
      </div>
      <div className="w-[42%] py-5 px-7">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Home</h2>
          <TbMoonStars className="text-xl" />
        </div>
        <div className="w-full flex items-start mt-7">
          <span className="w-14 text-3xl h-14 rounded-full bg-blue-500 text-white text-center leading-[50px]">
            {auth?.result?.name?.charAt(0)}
          </span>
          <div className="flex-1 ml-4">
            <textarea
              value={tweetHandle?.tweet}
              onChange={(e) =>
                setTweetHandle({ ...tweetHandle, tweet: e.target.value })
              }
              className="w-full border-none text-gray-800 outline-none text-[22px] resize-none"
              placeholder="what do you think?"
            ></textarea>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <MdOutlineImage
                  onClick={() =>
                    setOpenItems({ ...openItems, image: !openItems.image })
                  }
                  className="text-2xl mr-3 text-blue-500 cursor-pointer"
                />
                <AiOutlineFileGif className="text-2xl mr-3 text-blue-500 cursor-pointer" />
                <MdOutlineBarChart className="text-2xl mr-3 text-blue-500 cursor-pointer" />
                <BsEmojiSmile className="text-2xl mr-3 text-blue-500 cursor-pointer" />
                <AiOutlineCalendar className="text-2xl text-blue-500 cursor-pointer" />
              </div>
              <button
                onClick={handleTweet}
                className={`${
                  tweetHandle?.tweet?.length > 0 ? "bg-blue-500" : "bg-blue-300"
                } text-md font-semibold py-2 text-white px-5 rounded-full`}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {openItems?.image && (
            <ImageTweet
              tweetHandle={tweetHandle}
              setTweetHandle={setTweetHandle}
            />
          )}
        </div>
        <TweetsSection />
      </div>
      <div className="w-[29%] border-l border-gray-200">
        <Trending />
      </div>
    </div>
  );
};

export default Homepage;
