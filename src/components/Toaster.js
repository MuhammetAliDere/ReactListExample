import styled  from 'styled-components';
import { useContext } from 'react';

import AppContext from '../contexts/AppContext';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    position: absolute;
    right: 0;
    left: 0;
    flex-flow: column;
    z-index: 10;
`;
const Toast = styled.div`
    background-color: #ddfad3;
    border: 2px solid #5aad5b;
    color: #5aad5b;
    padding: 15px 40px;
    font-size: 30px;
    border-radius: 5px;
    align-self: center;
    margin-bottom: 45px;
`;

function Toaster(){
    const context  = useContext(AppContext);
    const {toasterData} = context.state;
    return(
        <Container>
            {toasterData.map((item, index) => 
                <Toast key={index}>
                    <b>{item.itemName}</b> {item.actionText}
                </Toast>)}           
        </Container>
    )
}

export default Toaster;