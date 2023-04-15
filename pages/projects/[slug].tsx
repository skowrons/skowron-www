import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeStringify from "rehype-stringify/lib";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import Image from "next/image";
import { TableOfContent } from "skowron/components/TableOfContent";
import SimplePage from "skowron/components/SimplePage";

interface ProjectPostProps {
  title: string;
  date: string;
  summary: string;
  content: string;
  titleFoto?: string; //path
}

export default function ProjectPost({ content, titleFoto }: ProjectPostProps) {
  return (
    <>
      <SimplePage>
        <div className="mb-8 text-orange-500 hover:text-orange-200">
          <Link href={"/projects"}>/ Projekte & Erfahrungen</Link>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div>
            {titleFoto !== "" && titleFoto !== undefined && (
              <Image
                src={"/" + titleFoto}
                alt={"Titel foto"}
                width={600}
                height={600}
                className="pb-8"
              />
            )}
            <article className="prose">
              <div
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              ></div>
            </article>
          </div>
          <TableOfContent />
        </div>
      </SimplePage>
    </>
  );
}

interface SlugParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as SlugParams;

  const content = fs.readFileSync(`posts/project/${slug}.mdx`);

  const matterResult = matter(content);

  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: matterResult.data.title,
      date: matterResult.data.date,
      summary: matterResult.data.summary,
      content: contentHtml,
      titleFoto: matterResult.data.titleFoto,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = fs.readdirSync("posts/project");

  let paths: Array<string> = [];

  fileNames.map((file) => {
    paths.push("/projects/" + file.slice(0, -4));
  });

  return {
    paths: paths,
    fallback: false,
  };
};
