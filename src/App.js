import React from 'react';
import ArticleCard from './components/ArticleCard';
import styled from 'styled-components';


const ArticleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


function App() {
  return (
    <div className="App">
      <ArticleContainer>
        <ArticleCard 
          card_title="I created a Javascript Interview quiz interface, need your help!" 
          width="40%"
          avatar_img={process.env.PUBLIC_URL+"images/default-avatar.png"} 
          background_img={process.env.PUBLIC_URL+"images/background.jpg"}
          tags={['beginners', 'computerscience', 'showdev', 'productivity']}
          username="Kevin"
          date="Apr 25"
          likes_count = {23}
          comments_count = {10}
          read_time = {2}
        />
      </ArticleContainer>
    </div>
  );
}

export default App;
