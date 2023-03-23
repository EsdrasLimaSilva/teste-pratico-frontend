import { useContext, useEffect, useState } from "react";
import { AppContext, Posts } from "../contexts/appContext";
import LoadMoreButton from "./LoadMoreButton";
import Post from "./Post";

const PostsList = () => {
   //posts
   const Context = useContext(AppContext);
   const { posts } = Context!;

   return (
      <div className="flex flex-col items-center gap-32">
         <div className="flex flex-row justify-center items-center flex-wrap gap-8  max-w-[1100px] mx-auto md:grid md:grid-cols-fluid md:w-[70%] lg:w-full ">
            {posts?.map((post) => (
               <Post key={post.id} id={post.id} title={post.title} body={post.body} />
            ))}
         </div>

         <LoadMoreButton />
      </div>
   );
};

export default PostsList;
