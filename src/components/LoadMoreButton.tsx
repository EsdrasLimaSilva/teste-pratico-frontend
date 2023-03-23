import { useContext, useState } from "react";
import { AppContext, Posts } from "../contexts/appContext";
import usePosts from "../hooks/usePosts";
import { ImSpinner8 } from "react-icons/im";

const LoadMoreButton = () => {
   const [noMorePosts, setNoMorePosts] = useState(false);
   const [gettingPosts, setGettingPosts] = useState(false);
   const { getPosts } = usePosts();

   //currentPage
   const Context = useContext(AppContext);
   const { page, setPosts, setPage } = Context!;

   const getMorePosts = async () => {
      try {
         if (noMorePosts) return;

         setGettingPosts(true);
         const posts = await getPosts(page + 10);

         if (posts.length == 0) setNoMorePosts(true);

         //adding more posts
         setPosts((prev) => [...prev!, ...posts]);
         //set the page
         setPage((prev) => (prev += 10));

         console.log(page);
      } catch (error) {
         console.log(error);
      } finally {
         setGettingPosts(false);
      }
   };

   return (
      <button
         type="button"
         className="w-32 flex justify-center items-center bg-orange-600 text-gray-50 font-bold  py-2 rounded-sm shadow-md hover:bg-white hover:text-orange-700 transtion-all duration-[90ms] disabled:opacity-80 disabled:bg-orange-800 disabled:hover:cursor-default
         disabled:hover:text-gray-50
         "
         onClick={getMorePosts}
         disabled={noMorePosts}
      >
         {gettingPosts ? (
            <ImSpinner8 className="animate-spin" />
         ) : noMorePosts ? (
            "no more posts"
         ) : (
            "load more"
         )}
      </button>
   );
};

export default LoadMoreButton;
