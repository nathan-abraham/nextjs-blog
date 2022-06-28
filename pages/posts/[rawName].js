import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Head from 'next/head'
import hljs from "highlight.js";


export default function PostPage({
  frontmatter: { title, date, cover_image },
  rawName,
  content,
}) {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang === "") {
        lang = "plaintext";
      }
      return hljs.highlight(code, { language: lang }).value;
    },
  });

  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <div className="max-w-4xl">
        <Link href="/">
          <a className="btn dark:btn-accent">Go Back</a>
        </Link>
        <div className="card shadow-xl mt-2 dark:outline dark:outline-2">
          <div className="card-body prose max-w-none">
            <h1 className="text-center">{title}</h1>
            <div className="bg-base-200 p-2 rounded-md">Posted on {date}</div>
            <img src={cover_image} alt="" />
            <article className="post-body">
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      rawName: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { rawName } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", rawName + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      rawName,
      content,
    },
  };
}
