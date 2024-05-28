import { Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import Article from "@/Components/Article";

export default function Home({
  auth,
  laravelVersion,
  phpVersion,
  articles,
}: PageProps<{ laravelVersion: string; phpVersion: string; articles: any[] }>) {
  return (
    <Layout title="Welcome" auth={auth}>
      <div className="flex flex-col gap-6">
        {articles.map((article) => (
          <Article key={article.id} article={article} isHome />
        ))}
      </div>
    </Layout>
  );
}
