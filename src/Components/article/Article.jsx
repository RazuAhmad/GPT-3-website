import React from "react";
import "./article.css";

const Article = ({ img, text, date }) => {
  return (
    <div className="gpt3__article">
      <p>
        <img src={img} alt="img" />
      </p>
      <div className="gpt3_article-content">
        <p>{date}</p>
        <h3>{text}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
