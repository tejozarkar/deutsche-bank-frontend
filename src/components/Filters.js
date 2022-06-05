import { Input, Radio } from "antd";
import { useEffect, useState } from "react";
const { Search } = Input;

const Filters = ({ blogs, setFilteredBlogs, setSortByAuthor, setSortByDate }) => {
   const [sortBy, setSortBy] = useState("None");
   const options = ["None", "Author", "Date"];
   const search = (e) => {
      setFilteredBlogs(blogs.filter((b) => b.title.toLowerCase().includes(e.target.value.toLowerCase())));
   };
   const onSort = (e) => {
      setSortBy(e.target.value);
   };

   useEffect(() => {
      switch (sortBy) {
         case "Author":
            setSortByAuthor(true);
            setSortByDate(false);
            break;
         case "Date":
            setSortByAuthor(false);
            setSortByDate(true);
            break;
         default:
            setSortByAuthor(false);
            setSortByDate(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [sortBy]);

   return (
      <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
         <Search placeholder="Search by title" size="large" onInput={search} enterButton style={{ width: "40%" }} />
         <label className="label" style={{ marginLeft: "30px", marginRight: "10px" }}>
            Sort by:{" "}
         </label>
         <Radio.Group options={options} onChange={onSort} value={sortBy} optionType="button" buttonStyle="solid" />
      </div>
   );
};

export default Filters;
