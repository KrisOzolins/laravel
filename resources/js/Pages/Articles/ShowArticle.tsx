import { Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import Article from "@/Components/Article";

export default function ShowArticle({
  auth,
  article,
}: PageProps<{ article: any }>) {
  return (
    <Layout title={article.title} auth={auth}>
      <Article article={article} isHome={false} />
    </Layout>
  );
}
