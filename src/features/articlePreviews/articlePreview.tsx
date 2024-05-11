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
        <div className='px-10 mt-4 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-7'>
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
