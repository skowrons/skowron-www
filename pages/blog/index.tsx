import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { ListLayout } from "skowron/components/ListLayout";

type BlogProps = {
  blogPosts: Array<{
    slug: string;
    title: string;
    date: string;
    summary: string;
  }>;
};

export default function Blog({ blogPosts }: BlogProps) {
  return <ListLayout posts={blogPosts} siteTitle="Blog" />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fileNames = fs.readdirSync("posts/blog");

  const posts = fileNames.map((file) => {
    const slug = "/blog/" + file.slice(0, -4);

    const fileData = fs.readFileSync("posts/blog/" + file);

    const meta = matter(fileData);

    return {
      slug,
      title: meta.data.title,
      date: meta.data.date,
      summary: meta.data.summary,
      draft: meta.data.draft,
    };
  });

  // remove drafts
  const filteredPosts = posts.filter((post) => !post.draft);

  return {
    props: {
      blogPosts: filteredPosts,
    },
  };
};
