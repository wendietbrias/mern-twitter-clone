const ImageTweet = ({ tweetHandle, setTweetHandle }) => {
  return (
    <div className="bg-blue-500 w-full rounded-lg px-4 py-4">
      <div className="image-form w-full flex items-center">
        <input
          value={tweetHandle?.image}
          onChange={(e) =>
            setTweetHandle({ ...tweetHandle, image: e.target.value })
          }
          className="flex-1 bg-transparent py-4  text-white outline-none placeholder:text-gray-100"
          placeholder="add your image"
          name="image"
          type="text"
        />
        <button className="bg-transparent font-semibold text-white text-sm capitalize ml-4">
          Add image
        </button>
      </div>
      {tweetHandle?.image.length === 0 ? null : (
        <img
          className="w-full h-[250px] object-cover rounded-lg"
          alt="image"
          src={tweetHandle?.image}
        />
      )}
    </div>
  );
};

export default ImageTweet;
