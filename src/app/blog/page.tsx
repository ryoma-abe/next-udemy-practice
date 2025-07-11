import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログの一覧ページです",
  description: "ブログの一覧ページですブログの一覧ページですブログの一覧ページです",
};

// ダミーデータ
const articles = [
  { id: "1", title: "タイトル1" },
  { id: "2", title: "タイトル2" },
  { id: "3", title: "タイトル3" },
];
// 3秒待機
async function fectchArticle() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("エラーが発生");
  return articles;
}
export default async function BlogPage() {
  const articles = await fectchArticle();
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}
