import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";

interface CoverImageProps {
  image: any;
  priority?: boolean;
  compact?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority, compact = false } = props;
  const image = source?.asset?._ref ? (
    <Image
      className={`h-auto w-full transform object-cover transition-transform duration-500 ${
        compact ? "" : "group-hover:scale-105"
      }`}
      width={compact ? 800 : 2000}
      height={compact ? 500 : 1000}
      alt={source?.alt || ""}
      src={
        urlForImage(source)
          ?.height(compact ? 500 : 1000)
          .width(compact ? 800 : 2000)
          .url() as string
      }
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div
      className="bg-gradient-to-r from-slate-100 to-blue-50"
      style={{ paddingTop: compact ? "60%" : "50%" }}
    />
  );

  return (
    <div
      className={`overflow-hidden rounded-lg shadow-sm transition-all duration-300 ${
        compact ? "" : "group-hover:shadow-lg"
      } h-full`}
    >
      {image}
    </div>
  );
}
