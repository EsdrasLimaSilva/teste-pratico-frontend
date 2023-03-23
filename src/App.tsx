import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailedPost from "./components/DetailedPost";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import PostsList from "./components/PostsList";

const router = createBrowserRouter([
   {
      path: "/",
      element: <PostsList />,
      errorElement: <ErrorPage />,
   },

   {
      path: "/post/:postId",
      element: <DetailedPost />,
   },
]);

const App = () => {
   return (
      <main className="w-screen min-h-screen bg-stone-50 pb-80">
         <Header />
         <RouterProvider router={router} />
      </main>
   );
};

export default App;
