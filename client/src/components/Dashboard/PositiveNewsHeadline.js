import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchPositiveNews = async () => {
      const apiUrl = 'http://10.6.3.187:5000/api/positive-news';
      try {
        const response = await axios.get(apiUrl);
        setNewsData(response.data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching positive news data:", error);
      }
    };

    fetchPositiveNews();
  }, []);

  return (
    <div className="news-component rounded-lg shadow-lg p-4 overflow-auto h-full">
      <h1 className="text-2xl font-bold mb-4">Latest Positive Health News</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="p-4 text-left font-semibold">Title</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsComponent;
