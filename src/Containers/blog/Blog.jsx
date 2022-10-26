import React from "react";
import { Article } from "../../Components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  const allBlogData = [
    {
      imgUrl: "https://i.ibb.co/q7TLyTR/blog02.png",
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: "https://i.ibb.co/zV5g2zN/blog03.png",
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: "https://i.ibb.co/6JxycHN/blog04.png",
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: "https://i.ibb.co/Ksg9Rpb/blog05.png",
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
  ];

  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            img={blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          {allBlogData.map((pd, index) => (
            <Article
              img={pd.imgUrl}
              text={pd.text}
              date={pd.date}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
