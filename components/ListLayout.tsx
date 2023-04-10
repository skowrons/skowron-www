import Link from "next/link";

export type PostData = {
  title: string;
  date: string;
  summary: string;
  slug: string;
};

export type ListLayoutProps = {
  posts: Array<PostData>;
  siteTitle: string;
};

export const ListLayout = ({ posts, siteTitle }: ListLayoutProps) => {
  return (
    <main>
      <p className="pb-4 pl-4">{siteTitle}</p>
      {posts.length === 0 ? (
        <p>Keine Beiträge momentan!</p>
      ) : (
        posts.map((post) => (
          <div key={post.slug} className="pb-4">
            <p>
              #{" "}
              <Link href={post.slug} className="underline">
                {post.title}
              </Link>
            </p>
            <p className="text-gray-400">{post.date}</p>
            <p>{post.summary}</p>
          </div>
        ))
      )}
    </main>
  );
};
