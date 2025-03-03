import Link from "next/link";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";

import type { MoreStoriesQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesQuery } from "@/sanity/lib/queries";

export default async function MoreStories(params: {
  skip: string;
  limit: number;
}) {
  const data = await sanityFetch<MoreStoriesQueryResult>({
    query: moreStoriesQuery,
    params,
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
        {data?.map((post) => {
          const { _id, title, slug, coverImage, excerpt, author } = post;
          return (
            <article
              key={_id}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
            >
              <div className="sm:grid sm:grid-cols-12 sm:gap-4">
                <div className="sm:col-span-5">
                  <Link
                    href={`/posts/${slug}`}
                    className="block aspect-[4/3] overflow-hidden"
                  >
                    <CoverImage
                      image={coverImage}
                      priority={false}
                      compact={true}
                    />
                  </Link>
                </div>

                <div className="p-4 sm:col-span-7 sm:p-5">
                  <h3 className="text-balance mb-2 text-xl font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-blue-600 sm:text-2xl">
                    <Link href={`/posts/${slug}`} className="hover:underline">
                      {title}
                    </Link>
                  </h3>

                  <div className="mb-2 text-sm font-medium text-slate-600">
                    <DateComponent dateString={post.date} />
                  </div>

                  {excerpt && (
                    <p className="text-pretty line-clamp-2 mb-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {excerpt}
                    </p>
                  )}

                  <div className="mt-auto pt-2">
                    {author && (
                      <Avatar
                        name={author.name}
                        picture={author.picture}
                        small={true}
                      />
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
