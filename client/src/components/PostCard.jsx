import moment from "moment";
import { FaRegComment } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, handleLike } from "../action/posts";
import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineDownload,
  AiTwotoneHeart,
} from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post?._id, auth?.token));
  };

  const handleLikePost = () => {
    dispatch(handleLike(auth, post?._id));
  };

  useEffect(() => {
    const findLike = post?.likes.find(
      (userLike, id) => userLike?._id === auth?._id
    );
    setLiked(findLike ? true : false);
    console.log("test");
  }, [post?.likes]);

  return (
    <div className="mb-5 flex items-start">
      <span className="w-10 h-10 rounded-full text-lg text-white font-bold bg-blue-500 flex items-center justify-center">
        {post?.userPost?.name?.charAt(0)}
      </span>
      <div className="flex-1 ml-5">
        <h5 className="text-md text-gray-400 font-normal">
          <span className="font-bold text-sm text-gray-600 mr-3">
            {post?.userPost?.name}
          </span>
          <span className="text-sm">
            {post?.userPost?.email} .{moment(post?.createdAt).fromNow()}
          </span>
        </h5>
        <p className="text-md text-gray-700 mt-1">{post?.tweet}</p>
        {post.image && (
          <img
            src={post?.image}
            alt={post?.userPost?.name}
            className="w-full h-[250px] object-cover  rounded-lg mt-5"
          />
        )}
        <div className="mt-5 flex justify-between items-center">
          <span className="flex text-md items-center text-gray-700">
            <FaRegComment className="mr-3" />
            {post?.comments?.length}
          </span>
          <span className="flex text-md items-center text-gray-700">
            <AiOutlineRetweet className="mr-3" />
            {post?.likes?.length}
          </span>
          <span
            onClick={handleLikePost}
            className="flex text-md items-center text-gray-700"
          >
            {liked ? (
              <AiTwotoneHeart className="text-pink-500 mr-2" />
            ) : (
              <AiOutlineHeart className="mr-3" />
            )}

            {post?.likes?.length}
          </span>
          <span className="flex text-md items-center text-gray-700">
            <AiOutlineDownload className="mr-3" />
          </span>
          {auth?.result?._id === post?.userId ? (
            <button
              onClick={handleDelete}
              className="text-red-500 font-semibold text-sm"
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
