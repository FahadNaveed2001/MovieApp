"use client";

import React, { useState, useEffect } from "react";

export default function Live() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?q=movie&apiKey=0332fe66050b4ef3a92f27445220515e"
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="bg-transparent text-white min-h-[100vh]">
      <div className="h-20"></div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
           Famous News From Today
          </h2>
          <p className="mt-4 text-gray-300">
        
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {news.map((article, index) => (
            <a
              key={index}
           
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border bg-[#1F1F47] border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/40"
            >
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold text-white">{article.title}</h2>
              <p className="mt-1 text-sm text-gray-300">{article.description}</p>
            </a>
          ))}
        </div>


      </div>
    </section>
  );
}
