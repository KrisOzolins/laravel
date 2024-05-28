import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import Article from "@/Components/Article";
import { getCsrfToken } from "@/utils";
import { FormEventHandler, useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import TextareaInput from "@/Components/TextareaInput";

export default function Create({
  auth,
  articles,
}: PageProps<{ articles: any[] }>) {
  // const csrfToken = getCsrfToken();

  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    body: "",
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("admin.articles.store"));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Create Article
        </h2>
      }
    >
      <Head title="Create Article" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <a
                href={route("admin.articles.index")}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Back
              </a>

              {/* <form
                method="post"
                action={route("admin.articles.store")}
                className="mt-6 text-black"
              >
                <input type="hidden" name="_token" value={csrfToken as string} />
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="body"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bost
                    </label>
                    <textarea
                      id="body"
                      name="body"
                      rows={3}
                      className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Create Article
                    </button>
                  </div>
                </div>
              </form> */}

              {/* <form method="post" action={route("admin.articles.store")} className="mt-6 text-black"> */}
              <form onSubmit={submit} className="mt-6 text-black">
                <div>
                  <InputLabel htmlFor="title" value="Title" />

                  <TextInput
                    id="title"
                    name="title"
                    value={data.title}
                    className="mt-1 block w-full"
                    autoComplete="title"
                    isFocused={true}
                    onChange={(e) => setData("title", e.target.value)}
                    // required
                  />

                  <InputError message={errors.title} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="body" value="Body" />

                  <TextareaInput
                    id="body"
                    name="body"
                    value={data.body}
                    className="mt-1 block w-full"
                    autoComplete="body"
                    onChange={(e) => setData("body", e.target.value)}
                    // required
                  />

                  {/* <TextInput
                    id="body"
                    name="body"
                    value={data.body}
                    className="mt-1 block w-full"
                    autoComplete="body"
                    onChange={(e) => setData("body", e.target.value)}
                    // required
                  /> */}

                  <InputError message={errors.body} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                  <PrimaryButton className="ms-4" disabled={processing}>
                    Create Article
                  </PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
