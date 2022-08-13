import { RiHomeLine, RiHashtag } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsBookmark, BsTwitter, BsCardList } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  return (
    <div className="w-full">
      <BsTwitter className="text-blue-500 text-3xl mb-7" />
      <div className="flex items-center mt-5">
        <RiHomeLine className="text-3xl" />
        <span className="text-xl ml-4 font-bold text-gray-800">Home</span>
      </div>
      <div className="flex items-center mt-7">
        <RiHashtag className="text-3xl" />
        <span className="text-xl ml-4 font-normal text-gray-800">Hashtag</span>
      </div>
      <div className="flex items-center mt-7">
        <FiBell className="text-3xl" />
        <span className="text-xl ml-4 font-normal text-gray-800">
          Notification
        </span>
      </div>
      <div className="flex items-center mt-7">
        <AiOutlineMail className="text-2xl" />
        <span className="text-xl ml-4 font-normal text-gray-800">Messages</span>
      </div>
      <div className="flex items-center mt-7">
        <BsBookmark className="text-2xl" />
        <span className="text-xl ml-4 font-normal text-gray-800">
          Bookmarks
        </span>
      </div>
      <div className="flex items-center mt-7">
        <BsCardList className="text-2xl" />
        <span className="text-xl ml-4 font-normal text-gray-800">Lists</span>
      </div>
      <div className="flex items-center mt-7">
        <AiOutlineUser className="text-2xl" />
        <span className="text-xl ml-4 font-normal text-gray-800">Profile</span>
      </div>
      <div className="flex items-center mt-7">
        <CgMoreO className="text-2xl" />
        <span className="text-xl ml-4 font-normal text-gray-800">Mores</span>
      </div>
      <button className="bg-blue-500 text-white capitalize text-lg rounded-full py-3 font-semibold mt-7 w-full">
        Tweet
      </button>
      <div
        onClick={() => dispatch({ type: "LOGOUT" })}
        className="cursor-pointer mt-14 flex items-start"
      >
        <div className="flex-1 flex items-center">
          <span className="w-10 h-10 text-white font-semibold rounded-full uppercase bg-blue-500 flex items-center justify-center">
            {auth?.result?.name?.charAt(0)}
          </span>
          <span className="ml-3">
            <h5 className="text-gray-800 text-lg font-semibold">
              {auth?.result?.name}
            </h5>
            <h5 className="text-gray-500 text-sm font-normal">
              {auth?.result?.email}
            </h5>
          </span>
        </div>
        <BiDotsHorizontalRounded />
      </div>
    </div>
  );
};

export default Sidebar;
