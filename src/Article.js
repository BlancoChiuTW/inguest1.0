import { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 1300px;
  margin: 60px auto 0;
  padding: 0 20px 80px;
`;

const Articlecard = styled.div`
h1 {
  margin: 5px 0;
  font-size: 52px;
}

p {
  margin: 5px 0;
  font-size: 18px;
  color: #black;
}

#category{
  color: #000000;
  font-weight:bolder ;
}
#author{
    margin: 5px 0;
    font-size: 14px;
    color: #888;
}
#date{
  margin: 5px 0;
    font-size: 14px;
    color: #888;
}
`;

const StyledImage = styled.img`
  display: block;
  margin: 40px auto;
  width: 50%;
`;


function Article() {
  const { id } = useParams();
  const [content, setContent] = useState({});
  const [list, setList] = useState({});

  useEffect(() => {
    // 從後端獲取文章內容
    fetch(`http://localhost:5000/api/articles/${id}`)
    .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error("Error fetching article content:", error));

    // 從後端獲取文章列表
    fetch('http://localhost:5000/api/articles')
    .then(response => response.json())
      .then(data => {
        const foundArticle = data.find(article => article.id.toString() === id);
        setList(foundArticle);
      })
      .catch(error => console.error("Error fetching article list:", error));
  }, [id]);

  return (
    <Container>
      <Articlecard>
        <p id="category">{list.category}</p>
        <h1>{content.title}</h1>
        <p id="author">{list.author}</p>
        <p id="date">{list.date}</p>
        <StyledImage src={`http://localhost:5000${list.imageUrl}`} alt={list.title} />
        <p>{content.content}</p>
      </Articlecard>
    </Container>
  );
}


export default Article;