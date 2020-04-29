import React from 'react';
import ArticleCard from './components/ArticleCard';
import styled from 'styled-components';
import Button, {GroupButton} from './components/Button';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 6;
  margin: 0 8%;
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
  flex-direction: column;
  flex: 1.5;
`;

const RightSideBard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 5px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  height: 400px;
  overflow-y: scroll;
`;

const App = () => {
  const CardsArray = [1,2,3,4,5,6,7,8,9,10];
  const TabsArray = ["WEEK", "MONTH", "YEAR", "INFINITY"];
  const Tags = ["javascript", "webev", "beginners", "react", "tutorial", "python", "discuss", "career", "css", "productivity",
                "node", "devops", "showdev", "html", "typescript", "java", "opensource", "redux", "angular", "linux"];

  return (
    <div className="App">
      <Container>
        <LeftSideBar>
          <GroupButton background="transparent" color="black" out_margin="5px 5px 0 5px;" vertical width="100%">
            <Button align='left' width="100%" padding="10px 25px 10px 10px" icon="FaHandsHelping" iconPosition="left">Sign In/Up</Button>
            <Button align='left' width="100%" padding="10px 25px 10px 10px" icon="FaClipboardList" iconPosition="left">Listings</Button>
            <Button align='left' width="100%" padding="10px 25px 10px 10px" icon="FaMicrophone" iconPosition="left">Podcasts</Button>
            <Button align='left' width="100%" padding="10px 25px 10px 10px" icon="FaVideo" iconPosition="left">Videos</Button> 
            <Button align='left' width="100%" padding="10px 25px 10px 10px" icon="FaTags" iconPosition="left">Tags</Button> 
          </GroupButton >
          <Button align='left' width="100%" padding="10px 25px 10px 42px" color="grey" bg="transparent">More...</Button>
          <TagContainer>
            <strong>Design Your Experience</strong>
            <GroupButton background="transparent" color="black" out_margin="5px 5px 5px 0;" vertical width="100%">
              {Tags.map(val => <Button key={val} width="100%" padding="10px 25px 10px 0">#{val}</Button>)}
            </GroupButton>
          </TagContainer>
        </LeftSideBar>
        <ArticleContainer>
          <TabContainer>
            <Button padding="10px" bg="grey" margin="5px 5px">FEED</Button>
            <GroupButton background="grey" out_margin="5px 5px;">
              {TabsArray.map(value => <Button key={value} padding="10px 20px">{value}</Button>)}
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
