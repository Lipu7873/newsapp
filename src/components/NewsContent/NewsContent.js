import React from "react";
import "./newsContent.css"
import { Container } from "@mui/material";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsResults, newsArray, setLodemore, lodeMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>

        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {
          lodeMore<=newsResults && (
            <>
              <hr />
              <button className="lodemore" onClick={() => setLodemore(lodeMore+20)}>Lode More</button>
            </>
          )
        }
      </div>
    </Container>
  );
};

export default NewsContent;
