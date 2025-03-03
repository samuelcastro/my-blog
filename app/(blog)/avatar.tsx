import { Image } from "next-sanity/image";

import type { Author } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";

interface Props {
  name: string;
  picture: Exclude<Author["picture"], undefined> | null;
  small?: boolean;
}

export default function Avatar({ name, picture, small = false }: Props) {
  const imageSize = small ? 32 : 48;

  return (
    <div className="flex items-center">
      {picture?.asset?._ref ? (
        <div
          className={`relative mr-3 ${
            small ? "h-8 w-8" : "h-12 w-12"
          } overflow-hidden rounded-full ring-2 ring-blue-100 ring-offset-1 transition-all duration-300 hover:ring-blue-300`}
        >
          <Image
            alt={picture?.alt || ""}
            className="h-full w-full object-cover"
            height={imageSize}
            width={imageSize}
            src={
              urlForImage(picture)
                ?.height(imageSize * 2)
                .width(imageSize * 2)
                .fit("crop")
                .url() as string
            }
          />
        </div>
      ) : (
        <div className={`mr-2 text-slate-700 ${small ? "text-xs" : "text-sm"}`}>
          By{" "}
        </div>
      )}
      <div
        className={`text-pretty font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200 ${
          small ? "text-sm" : "text-lg"
        }`}
      >
        {name}
      </div>
    </div>
  );
}
