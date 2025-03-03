import Link from "next/link";
import { Suspense } from "react";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";
import MoreStories from "./more-stories";
import Onboarding from "./onboarding";
import PortableText from "./portable-text";

import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";

function Intro(props: { title: string | null | undefined; description: any }) {
  const title = props.title || demo.title;
  const description = props.description?.length
    ? props.description
    : demo.description;
  return (
    <section className="relative mt-16 mb-16 flex flex-col items-center overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm lg:mb-16 lg:flex-row lg:justify-between lg:p-12">
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-100/30 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-purple-100/30 blur-3xl"></div>
      <h1 className="relative text-balance text-6xl font-bold leading-tight tracking-tighter text-slate-900 lg:pr-8 lg:text-7xl">
        {title || demo.title}
      </h1>
      <h2 className="relative text-pretty mt-6 max-w-xl text-center text-lg text-slate-700 lg:mt-0 lg:pl-8 lg:text-left">
        <PortableText
          className="prose-lg"
          value={description?.length ? description : demo.description}
        />
      </h2>
    </section>
  );
}

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<
  Exclude<HeroQueryResult, null>,
  "title" | "coverImage" | "date" | "excerpt" | "author" | "slug"
>) {
  return (
    <article className="group rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl sm:p-6">
      <div className="lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5 mb-6 lg:mb-0">
          <Link
            className="block overflow-hidden rounded-xl"
            href={`/posts/${slug}`}
          >
            <div className="aspect-[16/10] w-full">
              <CoverImage image={coverImage} priority compact={true} />
            </div>
          </Link>
        </div>

        <div className="lg:col-span-7">
          <h3 className="text-pretty mb-4 text-3xl font-bold leading-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-600 lg:text-4xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>

          <div className="mb-3 text-lg font-medium text-slate-600">
            <DateComponent dateString={date} />
          </div>

          {excerpt && (
            <p className="text-pretty mb-6 text-lg leading-relaxed text-slate-700">
              {excerpt}
            </p>
          )}

          <div className="mt-4">
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
        </div>
      </div>
    </article>
  );
}

export default async function Page() {
  const [settings, heroPost] = await Promise.all([
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
    sanityFetch<HeroQueryResult>({ query: heroQuery }),
  ]);

  return (
    <div className="container mx-auto px-5">
      <Intro title={settings?.title} description={settings?.description} />

      <div className="py-6">
        {heroPost ? (
          <HeroPost
            title={heroPost.title}
            slug={heroPost.slug}
            coverImage={heroPost.coverImage}
            excerpt={heroPost.excerpt}
            date={heroPost.date}
            author={heroPost.author}
          />
        ) : (
          <Onboarding />
        )}
      </div>

      {heroPost?._id && (
        <aside className="mt-10 mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-5xl font-bold leading-tight tracking-tighter text-slate-900 md:text-6xl">
              More Stories
            </h2>
            <div className="h-1 flex-grow rounded-full bg-gradient-to-r from-blue-200 to-purple-200"></div>
          </div>
          <Suspense
            fallback={
              <div className="text-center py-10">Loading more stories...</div>
            }
          >
            <MoreStories skip={heroPost._id} limit={100} />
          </Suspense>
        </aside>
      )}
    </div>
  );
}
