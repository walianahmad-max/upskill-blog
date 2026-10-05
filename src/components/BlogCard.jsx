const images = import.meta.glob("../assets/blog-*", {
  eager: true,
  query: "?url",
  import: "default",
});
export default function BlogCard({ post }) {
  return (
    <article
      className="overflow-hidden rounded-2xl bg-white shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
      data-category={post.category}
    >
      <a href={post.url}>
        <img
          className="h-[220px] w-full rounded-t-xl object-cover"
          src={images["../assets/" + post.image]}
          alt={post.title}
        />
      </a>
      <div className="p-6">
        <a href={post.url}>
          <span className="mb-2 inline-block rounded-full bg-[#E6F7FF] px-2 py-1 text-xs font-medium text-brand hover:bg-brand hover:text-white">
            {post.category}
          </span>
          <h2 className="mb-2 text-xl font-bold text-gray-900">{post.title}</h2>
          <p className="mb-4 text-sm text-gray-600">{post.excerpt}</p>
        </a>
        <div className="flex items-center justify-between gap-2 text-sm text-gray-500">
          <a href={post.url}>
            <i className="fas fa-calendar-alt mr-1" aria-hidden="true" />{" "}
            {post.date}
          </a>
          <a
            className="flex items-center gap-1 whitespace-nowrap rounded-lg bg-brand px-3 py-1 text-sm text-white transition-colors hover:bg-[#007acc]"
            href={post.url}
          >
            Read More{" "}
            <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
