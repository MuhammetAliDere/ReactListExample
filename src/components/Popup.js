import styled from 'styled-components';
import { useContext } from 'react';

import Button from './Button';
import AppContext from '../contexts/AppContext';


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: ${props => props.show ? 'block' : 'none'}
`;
const Wrapper = styled.div`
    width: 625px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -310px;
    margin-top: -150px;
    background-color: #efefef;
`;
const Header = styled.div`
    background-color: #000000;
    color: #fff;
    display: flex;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
`;
const Title = styled.span`
    flex: 1;
`;
const ExitLink = styled.span`
    cursor: pointer;
`; 
const Buttons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
    & button {
        margin-left: 30px;
    }
    & button:first-child{
        margin-left: 0;
        margin-right: 30px;
    }
`;
const Text = styled.div`
    text-align: center;
    color: #5a5a5a;
    margin-top: 50px;
    font-size: 30px;
`;
const Name = styled.div`
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 40px;
`;


function Popup(){
    const context = useContext(AppContext);
    return(
        <Container show={context.state.showDeletePopup}>
            <Wrapper>
                <Header>
                    <Title>Remove Link</Title>
                    <ExitLink onClick={_ => context.actions.popupCancelClicked()}>X</ExitLink>
                </Header>
                <div>
                    <Text>Do you want to remove:</Text>
                    <Name>{context.state.deleteItemName}</Name>
                    <Buttons>
                        <Button clicked={_ => context.actions.popupOkClicked()}>OK</Button>
                        <Button clicked={_ => context.actions.popupCancelClicked()}>CANCEL</Button>
                    </Buttons>
                </div>
            </Wrapper>
        </Container>
    )
}


export default Popup;