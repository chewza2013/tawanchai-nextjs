"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function NewsPage() {
  const [news, setNews] = useState([]);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    axios.get("/api/news").then((res) => {
      setNews(res.data.results);
    });
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center my-5">รายการข่าว</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {news.map((item) => (
          <div key={item.article_id} className="bg-orange-700 rounded-xl p-2">
            <h2 className="text-xl text-center">{item.title}</h2>

            {item.image_url && (
              <img
                src={item.image_url}
                alt={item.title}
                className="h-40 mx-auto mt-2 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
