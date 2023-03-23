import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../contexts/appContext";
import usePosts from "../hooks/usePosts";
import Comment from "./Comment";

interface Comment {
   postId: number;
   id: number;
   name: string;
   email: string;
   body: string;
}

interface DetailedPost extends Post {
   comments: Comment[];
}

const DetailedPost = () => {
   const [postData, setPostData] = useState<DetailedPost | null>(null);
   const { getPostData, getPostComments } = usePosts();

   const params = useParams();

   //getting post data
   useEffect(() => {
      (async () => {
         try {
            const data = await getPostData(Number(params.postId));
            const comments = await getPostComments(Number(params.postId));

            setPostData({
               ...data,
               comments: [...comments],
            });
         } catch (error) {}
      })();
   }, []);

   if (postData) {
      return (
         <main className="p-8 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">{postData.title}</h1>
            <div className="w-full max-w-xl h-56 bg-green-600 mb-20" />

            <p>{postData.body}</p>

            <h3 className="font-bold text-lg mt-8">Comments</h3>

            <div>
               {postData.comments.map((comment) => (
                  <Comment
                     key={comment.id}
                     username={comment.name}
                     body={comment.body}
                     email={comment.email}
                  />
               ))}
            </div>
         </main>
      );
   }

   return (
      <main className="w-full flex justify-center items-center h-[300px]">
         <h2>Getting data...</h2>
      </main>
   );
};

export default DetailedPost;
