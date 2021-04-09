import {useContext} from 'react';
import styled  from  'styled-components';
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi';

import AppContext from '../contexts/AppContext';
import deleteIcon from '../images/delete-icon.png';

const Container = styled.div`
    display: flex;
    padding: 10px;
    position: relative;
    & .delete-wrapper {
        position: absolute;
        right: -20px;
        top: -10px;
        font-size: 20px;
        display: none;
    }
    &:hover{
        background-color: #f6f6f6;
        cursor: pointer;
        & .delete-wrapper {
            display: block;
        }
    }
`;
const Icon = styled.div`
    width: 120px;
    height: 120px;
    font-size: 60px;
    background-color: #ececec;
    align-self: flex-start;
    border-radius: 5px;
`;
const Point = styled.div`
    text-align: center;
`;
const IconLabel = styled.div`
    font-size: 30px;
    text-align: center;
`;
const Content = styled.div`
    text-align: left;
    padding: 5px 13px;
    display: flex;
    flex: 1;
    flex-direction: column;
`;
const Name = styled.div`
    font-weight: bold;
    font-size: 25px;
`;
const Link = styled.div`
    color: #7e7e7e;
`;
const Votes = styled.div`
    flex: 1;
    align-self: flex-end;
    display: flex;
    align-items: flex-end;
    width: 100%;
    color: #7e7e7e;
    font-weight: bold;
    font-size: 14px;
`;
const UpLink = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
`;
const DownLink = styled.a`
    flex: 1;
    text-align: right;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
`;
const UpArrow = styled(BiUpArrowAlt)`
    font-size: 24px;
    display: inline-block;
    margin-bottom: -5px;
`;
const DownArrow = styled(BiDownArrowAlt)`
    font-size: 24px;
    display: inline-block;
    margin-bottom: -5px;
`;

function ListItem(props) {
    const context = useContext(AppContext);
    return (
        <Container>
            <div className='delete-wrapper' 
                onClick={_ => context.actions.deleteListItemClicked(props.data.updateTime, props.data.name)}>
                <img src={deleteIcon} alt="delete"/>
            </div>
            <Icon>
                <Point>{props.data.point}</Point>
                <IconLabel>POINTS</IconLabel>
            </Icon>
            <Content>
                <Name>{props.data.name}</Name>
                <Link>{props.data.url}</Link>
                <Votes>
                    <UpLink onClick={() => context.actions.voteClicked(props.data.updateTime, 'up')}>
                        <UpArrow/>
                        Up Vote
                    </UpLink>
                    <DownLink onClick={() => context.actions.voteClicked(props.data.updateTime, 'down')}>
                        <DownArrow/>
                        Down Vote
                    </DownLink>
                </Votes>
            </Content>
        </Container>
    )
}

export default ListItem;