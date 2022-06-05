import React, { useEffect, useState } from "react";
import { getBlogs } from "../services/BlogService";
import BlogList from "./Blog/BlogList";
import Filters from "./Filters";

const Home = () => {
   const [blogs, setBlogs] = useState([]);
   const [filteredBlogs, setFilteredBlogs] = useState([]);
   const [loading, setLoading] = useState(true);
   const [sortByAuthor, setSortByAuthor] = useState(false);
   const [sortByDate, setSortByDate] = useState(false);

   useEffect(() => {
      getBlogs().then((blogs) => {
         setBlogs(blogs);
         setFilteredBlogs(blogs);
         setLoading(false);
      });
   }, []);

   return (
      <div style={{ height: "100%" }}>
         <Filters blogs={blogs} setFilteredBlogs={setFilteredBlogs} setSortByAuthor={setSortByAuthor} setSortByDate={setSortByDate} />
         <BlogList blogs={filteredBlogs} loading={loading} sortByAuthor={sortByAuthor} sortByDate={sortByDate} hideStatus={true} />
      </div>
   );
};

export default Home;
