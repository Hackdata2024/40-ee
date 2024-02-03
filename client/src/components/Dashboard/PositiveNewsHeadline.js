import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="bg-white rounded-lg shadow-lg p-4 overflow-auto h-full">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">
        Latest Health News
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-blue-50">
            <tr>
              <th className="p-4 text-left font-semibold text-gray-700">
                Title
              </th>
              <th className="p-4 text-left font-semibold text-gray-700">
                Description
              </th>
              <th className="p-4 text-left font-semibold text-gray-700">
                Published Date
              </th>
              <th className="p-4 text-left font-semibold text-gray-700">
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {newsData.map((article, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-4">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    {article.title}
                  </a>
                </td>
                <td className="p-4 text-gray-600">{article.description}</td>
                <td className="p-4 text-gray-500">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </td>
                <td className="p-4 text-gray-500">{article.source.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsComponent;
