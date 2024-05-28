import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import Article from "@/Components/Article";

export default function Articles({
  auth,
  articles,
}: PageProps<{ articles: any[] }>) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Articles
        </h2>
      }
    >
      <Head title="Articles" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <a
                href={route("admin.articles.create")}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Create Article
              </a>

              <div className="flex flex-col mt-6 space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
                {articles.map((article) => (
                  <div key={article.id} className="flex flex-col pt-6">
                    <h3 className="text-lg font-semibold">
                      <Link href={route("admin.articles.edit", article.id)}>
                        {article.title}
                      </Link>
                    </h3>
                    <p>{article.body}</p>
                    <div className="flex gap-4 mt-3">
                      <Link href={route("admin.articles.edit", article.id)} className="text-indigo-600 hover:text-indigo-700">
                        Edit
                      </Link>
                      <Link href={route("admin.articles.destroy", article.id)} className="text-red-600 hover:text-red-700" method="delete" as="button">
                        Delete
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
