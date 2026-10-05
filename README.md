# Upskill Blog — React + Tailwind CSS

## اجرا
ZIP را Extract All کنید. فولدر دارای package.json را در VS Code باز کنید:

```sh
npm install
npm run dev
```

برای ساخت نسخه نهایی:
```sh
npm run build
```

تمام طراحی صفحه، ریسپانسیو و هاور با کلاس‌های Tailwind داخل JSX نوشته شده است.
`src/style.css` فقط سه دستور Tailwind دارد. فایل fontawesome.css تنها برای آیکن‌های محلی است.

- src/App.jsx: عنوان، فیلتر دسته‌بندی و نمایش کارت‌ها
- src/components/Header.jsx: منوی دسکتاپ و موبایل
- src/components/BlogCard.jsx: کارت قابل استفاده مجدد
- src/components/Footer.jsx: بنر و فوتر
- src/data/posts.js: متن‌ها، دسته‌بندی‌ها و آرایه مقالات
- src/assets: عکس‌ها و فونت آیکن‌ها
- tailwind.config.js: مسیر فایل‌ها و رنگ brand
- postcss.config.js: اتصال Tailwind به Vite

فیلترها و منوی موبایل با useState کار می‌کنند. Read More مقاله را در سایت اصلی باز می‌کند.
