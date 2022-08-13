import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "./PostCard";

const TweetsSection = () => {
  const { post } = useSelector((state) => state);

  return (
    <div className="w-full mt-7">
      {post?.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
};

export default TweetsSection;
