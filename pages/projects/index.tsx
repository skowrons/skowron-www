import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { ListLayout } from "skowron/components/ListLayout";

type ProjectsProps = {
  projects: Array<{
    slug: string;
    title: string;
    date: string;
    summary: string;
  }>;
};

export default function Projects({ projects }: ProjectsProps) {
  return <ListLayout posts={projects} siteTitle="Projekte & Erfahrungen" />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fileNames = fs.readdirSync("posts/project");

  const projects = fileNames.map((file) => {
    const slug = "/projects/" + file.slice(0, -4);

    const fileData = fs.readFileSync("posts/project/" + file);

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
  const filteredProjects = projects.filter((post) => !post.draft);

  return {
    props: {
      projects: filteredProjects,
    },
  };
};
