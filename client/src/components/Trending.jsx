import { FiSearch } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const trendingList = [
  {
    title: "Kominfo",
    sub: "Trending in indonesia",
    count: "8.441 tweets",
  },
  {
    title: "Animetime",
    sub: "Trending in Indonesia",
    count: "5.441 tweets",
  },
  {
    title: "Paypal",
    sub: "Trending in Indonesia",
    count: "5.441 tweets",
  },
  {
    title: "Steam",
    sub: "Trending in Indonesia",
    count: "5.441 tweets",
  },
];

const Trending = () => {
  return (
    <div className="w-full py-5 px-5">
      <div className="w-full bg-gray-200 rounded-full px-5 py-3 flex items-center">
        <FiSearch className="text-xl text-gray-600 mr-3" />
        <input
          type="text"
          className="flex-1 bg-transparent"
          placeholder="search twitter"
        />
      </div>
      <div className="w-full bg-gray-100 rounded-lg mt-7 px-4 py-4">
        <h2 className="font-extrabold text-gray-800 text-lg">Trends for you</h2>
        <div className="w-full mt-5">
          {trendingList?.map((trending, idx) => (
            <div key={idx} className="flex items-start mb-3">
              <div className="flex-1">
                <h5 className="text-xs text-gray-700">{trending?.sub}</h5>
                <h3 className="font-bold text-lg my-1 text-gray-800">
                  #{trending?.title}
                </h3>
                <h5 className="text-xs text-gray-700">{trending?.count}</h5>
              </div>
              <BiDotsHorizontalRounded className="text-gray-800 text-lg cursor-pointer" />
            </div>
          ))}
        </div>
        <button className="text-blue-500 font-medium text-md mt-7">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Trending;
