import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { headers } from "next/headers";

const getData = async (url) => {
  const res = await fetch(`${url}/api/blog`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
const BlogPage = async () => {
  const headerList = headers();
  const fullUrl = headerList.get("x-full-url");

  // Use the full URL as needed
  console.log(fullUrl);
  const posts = await getData(fullUrl);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
