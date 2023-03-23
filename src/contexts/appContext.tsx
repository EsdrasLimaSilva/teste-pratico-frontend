import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import usePosts from "../hooks/usePosts";

export interface Post {
   userId: number;
   id: number;
   title: string;
   body: string;
}

export type Posts = Post[];

// all props that the context has
interface ContextValue {
   posts: Posts | null;
   setPosts: Dispatch<SetStateAction<Posts | null>>;
   page: number;
   setPage: Dispatch<SetStateAction<number>>;
}

export const AppContext = createContext<ContextValue | null>(null);

const PostsProvider = ({ children }: { children: ReactNode }) => {
   const [posts, setPosts] = useState<Posts | null>(null);
   const [page, setPage] = useState(1);
   const { getPosts } = usePosts();

   //get 10 initial posts
   useEffect(() => {
      (async () => {
         const posts = await getPosts(page);
         setPosts(posts);
      })();
   }, []);

   return (
      <AppContext.Provider value={{ posts, setPosts, page, setPage }}>
         {children}
      </AppContext.Provider>
   );
};

export default PostsProvider;
