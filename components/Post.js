import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="card w-80 sm:w-96 bg-base-100 shadow-xl dark:outline dark:outline-1">
      <div className="card-body">
        <figure className="">
          <img src={post.frontmatter.cover_image} alt="Blog cover image" />
        </figure>
        <div className="bg-base-200 p-2 rounded-md mb-2">
          Posted on {post.frontmatter.date}
        </div>
        <h3 className="card-title">{post.frontmatter.title}</h3>

        <figcaption className="flex items-center space-x-4">
          <img
            src={post.frontmatter.profile_photo || "/images/profile_photos/default.png"}
            alt="Author profile photo"
            className="w-14 h-14 rounded-full object-cover"
          ></img>
          <h4>
            Written by{" "}
            <span className="font-bold">{post.frontmatter.author}</span>
          </h4>
        </figcaption>

        <p>{post.frontmatter.excerpt}</p>
        <Link href={`/posts/${post.rawName}`} passHref>
          <button className="btn btn-primary btn-md">Read More</button>
        </Link>
      </div>
    </div>
  );
}
