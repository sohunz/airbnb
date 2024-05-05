import { articleData } from "../../mocks/article";
import ArticleListItem from "../../components/articleListItem";
import { useEffect } from "react";

const ArticlePreviews = () => {
  useEffect(() => {
    console.log(articleData);
  }, []);

  return (
    <>
      <section className="">
        <h2 className='section-title'>All Articles</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7'>
          {articleData.map((article) => (
            <div key={article.id} className="w-full">
              <ArticleListItem article={article} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ArticlePreviews;
