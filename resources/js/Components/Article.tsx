import { Link } from "@inertiajs/react";
import { ArrowIcon } from "./Icons";
import dayjs from "dayjs";

export default function Article({
  article,
  isHome = true,
}: {
  article: any;
  isHome?: boolean;
}) {
  return (
    <article className="flex flex-col rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">
      <h2 className="text-xl font-semibold text-black dark:text-white">
        {article.title}
      </h2>
      <p className="mt-4 text-sm/relaxed">{article.body}</p>
      <div className="flex items-center justify-start mt-6">
        {!isHome && <ArrowIcon rotate={180} />}
        <Link
          href={isHome ? route("articles.show", article.slug) : "/"}
          className={`${
            isHome ? "me-3" : "ms-3"
          } text-[#FF2D20] hover:text-[#FF2D20] dark:text-[#FF2D20] dark:hover:text-[#FF2D20]`}
        >
          {isHome ? "Read more" : "Back to Articles"}
        </Link>
        {isHome && <ArrowIcon />}
        <span className="ms-auto text-sm text-black/50 dark:text-white/50">
          Created on {dayjs(article.created_at).format("MMMM D, YYYY")}
        </span>
      </div>
    </article>
  );
}
