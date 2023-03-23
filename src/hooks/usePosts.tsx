const usePosts = () => {
   const BASE_URL = "https://jsonplaceholder.typicode.com";

   //get a data from a specifc url
   const order = async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
   };

   const getPosts = async (page: number) => {
      const data = await order(`${BASE_URL}/posts?_start=${page}&_limit=10`);
      return data;
   };

   const getPostData = async (postId: number) => {
      const data = await order(`${BASE_URL}/posts/${postId}`);
      return data;
   };

   const getPostComments = async (postId: number) => {
      const data = await order(`${BASE_URL}/posts/${postId}/comments`);
      return data;
   };

   return { getPosts, getPostData, getPostComments };
};

export default usePosts;
