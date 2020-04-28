import React from 'react';
import ArticleCard from './components/ArticleCard';
import styled from 'styled-components';
import Button, {GroupButton} from './components/Button';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 6;
  margin: 0 20px;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 3;
`;

const LeftSideBar = styled.div`
  display: flex;
  flex: 1.5;
`;

const RightSideBard = styled.div`
  display: flex;
  flex: 1.5;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 5px;
`;

const App = () => {
  let CardsArray = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="App">
      <Container>
        <LeftSideBar></LeftSideBar>
        <ArticleContainer>
          <TabContainer>
            <Button padding="10px" bg="grey" margin="5px 5px">FEED</Button>
            <GroupButton background="grey" out_margin="5px 5px;">
              <Button padding="10px 20px" bg="blue">WEEK</Button>
              <Button padding="10px 20px">MONTH</Button>
              <Button padding="10px 20px">YEAR</Button>
              <Button padding="10px 20px">INFINITY</Button>         
            </GroupButton>
            <Button padding="10px" bg="grey" color="white" margin="5px 5px">LATEST</Button>
          </TabContainer>
          {CardsArray.map(val => 
            <ArticleCard 
              key={val}
              card_title="I created a Javascript Interview quiz interface, need your help!" 
              avatar_img={process.env.PUBLIC_URL+"images/default-avatar.png"} 
              background_img={val % 2 !== 0 ? process.env.PUBLIC_URL+"images/background.jpg" : ""}
              tags={['beginners', 'computerscience', 'showdev', 'productivity']}
              username="Kevin"
              date="Apr 25"
              likes_count={23}
              comments_count={10}
              read_time={2}
              size={val === 1 ? "lg" : ""}
            />)
          }
        </ArticleContainer>
        <RightSideBard></RightSideBard>
      </Container>
    </div>
  );
}

export default App;
