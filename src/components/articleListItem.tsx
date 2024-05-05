interface Article {
    id: number;
    image: string;
    title: string;
    preview: string;
  }
  
  interface ArticleListItemProps {
    article: Article;
  }
  
  export default function ArticleListItem({ article }: ArticleListItemProps) {
    return (
      <button key={article.id} className='article-container'>
        <img src={article.image} alt='' className='object-cover min-h-64  rounded-lg '/>
        <div className='article-content-container'>
          <h3 className='article-title'>{article.title}</h3>
          <p className='article-preview'>{article.preview}</p>
        </div>
      </button>
    );
  }
  