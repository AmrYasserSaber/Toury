"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAuth from "@/context/useAuth"; // Replace with your authentication library
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config"
import Article from "@/components/article"; // Replace with your Appwrite service

const ArticlePage = () => {
  const { authStatus } = useAuth();
  const [articles, setArticles] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const moonArticles = await appwriteService.getCollectionDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteMoonsArticlesId
        );
        const planetArticles = await appwriteService.getCollectionDocuments(
          conf.appwriteDatabaseId,
          conf.appwritePlanetsArticlesId
        );
        setArticles({
          planetArticles: planetArticles.documents,
          moonArticles: moonArticles.documents,
        });
        setLoading(false);
      } catch (e) {
        console.error("Error fetching data:", e);
        setError(e);
        setLoading(false);
      }
    };
    fetchData().then((r) => r);
  }, []);

  console.log(articles);

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Article articles={articles} />
      )}
    </section>
  );
};

export default ArticlePage;
