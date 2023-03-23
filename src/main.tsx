import ReactDOM from "react-dom/client";
import App from "./App";
import PostsProvider from "./contexts/appContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <PostsProvider>
      <App />
   </PostsProvider>,
);
