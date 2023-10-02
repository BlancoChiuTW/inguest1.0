import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // 正確的導入位置
import styled from 'styled-components';

const API_BASE_URL = 'https://inguest.azurewebsites.net'; 

const Container = styled.div`
  max-width: 1300px;
  margin: 60px auto 0;
  padding: 0 20px 80px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  margin-bottom: 30px;

  &:hover h2 {
    text-decoration: underline;
  }
`;

const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const ArticleCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 0;

  img {
    width: 150px;
    height: auto;
  }

  h2 {
    margin: 5px 0;
    font-size: 30px;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #888;
  }

  span {
    font-weight: bold;
    margin-right: 10px;
  }

  #category{
    color: #000000;
    font-weight:bolder ;
  }
`;

const HighlightedArticleCard = styled(ArticleCard)`
  img {
    width: 100%;
    height: 65vh;
    object-fit: cover;
  }
  border-bottom: 3px solid black;  // 粗度增加到 3px
  padding-bottom: 45px;  // 增加與內容的距離
`;

function Content() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // 從後端獲取文章列表
fetch(`${API_BASE_URL}/api/articles`)
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error("Error fetching articles:", error));
  }, []);

  return (
    <Container>
      {articles.map(article => {
        if (article.highlight) {
          return (
            <StyledLink key={article.id} to={`/article/${article.id}`}>
              <HighlightedArticleCard>
                <img src={`${API_BASE_URL}${article.imageUrl}`} alt={article.title} />  // 修改這裡
                <ArticleInfo>
                  <p id="category"><span>{article.category}</span></p>
                  <h2>{article.title}</h2>
                  <p>By {article.author}</p>
                  <p>{article.date}</p>
                </ArticleInfo>
              </HighlightedArticleCard>
            </StyledLink>
          );
        } else {
          return (
            <StyledLink key={article.id} to={`/article/${article.id}`}>
              <ArticleCard>
                <img src={`${API_BASE_URL}${article.imageUrl}`} alt={article.title} />  // 修改這裡
                <ArticleInfo>
                  <p><span>{article.category}</span></p>
                  <h2>{article.title}</h2>
                  <p>By {article.author}</p>
                  <p>{article.date}</p>
                </ArticleInfo>
              </ArticleCard>
            </StyledLink>
          );
        }
      })}
    </Container>
  );
}

export default Content;
















