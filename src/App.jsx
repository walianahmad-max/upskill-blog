import { useState } from "react";
import Header from "./components/Header.jsx";
import BlogCard from "./components/BlogCard.jsx";
import Footer from "./components/Footer.jsx";
import { categories, posts } from "./data/posts.js";
export default function App() {
  const [category, setCategory] = useState("All");
  const filteredPosts =
    category === "All"
      ? posts
      : posts.filter((post) => post.category === category);
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-[#00C2FF]/10 to-brand/10 px-4 py-24 text-center">
          <h1 className="mb-4 text-5xl font-extrabold leading-none text-slate-700 md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00C2FF] to-brand bg-clip-text text-transparent">
              Blog 
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl">
            Explore our latest news, tutorials, and insights.
          </p>
        </section>
        <section
          className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6 py-6"
          aria-label="Filter blog posts"
        >
          {categories.map((name) => (
            <button
              key={name}
              className={
                "rounded-full border px-4 py-2 transition-colors hover:bg-brand hover:text-white " +
                (name === category
                  ? "border-brand bg-brand text-white"
                  : "border-gray-200 bg-transparent")
              }
              aria-pressed={name === category}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </section>
        <section
          className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Blog posts"
          aria-live="polite"
        >
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </section>
        {filteredPosts.length === 0 && (
          <p className="-mt-12 pb-8 text-center text-sky-500">
            No blog posts found for {category}. Please try another category.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
