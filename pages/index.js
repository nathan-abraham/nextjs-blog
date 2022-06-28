import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import Searchbar from "../components/Searchbar";
import { useState } from "react";

export default function Home({ posts }) {
  const [matches, setMatches] = useState(null);

  return (
    <div>
      <Head>
        <title>HackGwinnett Blog</title>
      </Head>

      <Searchbar posts={posts} setMatches={setMatches} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {matches
          ? matches.map((post, index) => <Post key={index} post={post} />)
          : posts.map((post, index) => <Post key={index} post={post} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const rawName = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      rawName: rawName,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
