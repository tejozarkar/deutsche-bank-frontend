import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import GuardedRoute from "../utils/GuardedRoute";
import Home from "./Home";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Create from "./Blog/Admin/Create";
import Header from "./Header";
import MyBlogs from "./Blog/Admin/MyBlogs";
import BlogDetails from "./Blog/BlogDetails";
import Approvals from "./Blog/Admin/Approvals";
import EditBlog from "./Blog/Admin/EditBlog";
import BlogHistory from "./Blog/Admin/BlogHistory";

function App() {
   return (
      <div className="App">
         <Header />
         <div className="content-wrap">
            <Routes>
               <Route exact path="/" element={<GuardedRoute />}>
                  <Route exact path="/" element={<Home />} />
               </Route>
               <Route exact path="/create" element={<GuardedRoute />}>
                  <Route exact path="/create" element={<Create />} />
               </Route>
               <Route exact path="/my-blogs" element={<GuardedRoute />}>
                  <Route exact path="/my-blogs" element={<MyBlogs />} />
               </Route>
               <Route exact path="/blog/:id" element={<GuardedRoute />}>
                  <Route exact path="/blog/:id" element={<BlogDetails />} />
               </Route>
               <Route exact path="/approvals" element={<GuardedRoute />}>
                  <Route exact path="/approvals" element={<Approvals />} />
               </Route>
               <Route exact path="/edit-blog/:id" element={<GuardedRoute />}>
                  <Route exact path="/edit-blog/:id" element={<EditBlog />} />
               </Route>
               <Route exact path="/blog-history/:id" element={<GuardedRoute />}>
                  <Route exact path="/blog-history/:id" element={<BlogHistory />} />
               </Route>
               <Route path="/auth/login" element={<Login />}></Route>
               <Route path="/auth/signup" element={<Signup />}></Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;