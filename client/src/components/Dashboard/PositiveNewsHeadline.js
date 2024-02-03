import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const apiKey = "ba89c119ba754a2f97cd10f49004ca70";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setNewsData(response.data.articles.slice(0, 10)); // Only first 10 articles
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  return (
    <div className="news-component rounded-lg shadow-lg p-4 overflow-auto h-full">
      <h1 className="text-2xl font-bold mb-4">Latest Health News</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="p-4 text-left font-semibold">Title</th>
              <th className="p-4 text-left font-semibold">Description</th>
              <th className="p-4 text-left font-semibold">Published Date</th>
              <th className="p-4 text-left font-semibold">Source</th>
            </tr>
          </thead>
          <tbody>
            {newsData.map((article, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </td>
                <td className="p-4">{article.description}</td>
                <td className="p-4">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </td>
                <td className="p-4">{article.source.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsComponent;
