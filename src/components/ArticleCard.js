import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';

const CardContainer = styled.div`
    width: ${props => props.width? props.width : 'fit-content'};
    display: flex;
    margin: 10px 5px;
    cursor: pointer;
    flex-wrap: wrap;
    border-radius: 5px;
    border: 1px solid #ccc;
    flex-direction: column;
`;

const Avatar = styled.img`
    width: 35px;
    height: 35px;
    padding: ${props => props.size === "lg" ? "15px 10px" : "7px 10px"};
    border-radius: 50%;
`;

const TitleBackground = styled.img`
    width: 100%;
    height: fit-content;
    display: flex;
    flex: 1;
    border-radius: 5px;
`;

const TitileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 0;
`;

const TitleInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5px 5px 0;
`;

const CardTitle = styled.div`
    font-size: ${props => props.size === "lg" ? "48px" : "25px"};
    font-weight: 700;
`;

const TagContainer = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Tag = styled.a`
    color: black;
    margin-right: 5px;
    font-weight: 100;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    &:before {
        content: '#';
    }
`;

const DateContainer = styled.a`
    color: #64707d;
    font-weight: 500;
    text-decoration: none;
    width: fit-content;
    &:hover { 
        text-decoration: underline;
    }
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
`;

const LeftFooterContainer = styled.div`
    display: flex;
    flex: 0.5;
    font-size: 18px;
    font-weight: 100;
    justify-content: flex-start;
    align-items: center;
`;

const RightFooterContainer = styled.div`
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    align-items: center;
`;

const StatsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px 5px 0 5px;
    align-items: center;
`;

const ReadTimeContainer = styled.div`
    display: flex;
    margin: 0 10px;
    color: #64707D;
`;

const ArticleCard = ({
    card_title, 
    width, 
    avatar_img, 
    background_img, 
    tags, 
    username, 
    date, 
    likes_count, 
    comments_count, 
    read_time,
    size
}) => {
    return (
    <CardContainer width={width}>
        {background_img ? <div><TitleBackground src={background_img}/></div> : null}
        <TitileContainer>
            <div><Avatar src={avatar_img} size={size}/></div>
            <TitleInfoContainer>
                <CardTitle size={size}>{card_title}</CardTitle>
                <TagContainer>{tags.map(tag => <Tag key={tag} href="#">{tag}</Tag>)}</TagContainer>
                <DateContainer href="#">{username} &middot; {date}</DateContainer>
            </TitleInfoContainer>
        </TitileContainer>
        <FooterContainer>
            <LeftFooterContainer>
                <StatsContainer>
                    <FontAwesomeIcon icon={faHeart} color="#C5C5C5"/>
                    <span> &nbsp;{likes_count} </span>
                </StatsContainer>
                <StatsContainer>
                    <FontAwesomeIcon icon={faComment} color="#C5C5C5"/>
                    <span> &nbsp;{comments_count} </span>
                </StatsContainer>
            </LeftFooterContainer>
            <RightFooterContainer>
                <ReadTimeContainer>{read_time + " min read"}</ReadTimeContainer>
                <Button margin="0 5px 0 0">{"Save"}</Button>
            </RightFooterContainer>
        </FooterContainer>
    </CardContainer>)
}

export default ArticleCard;