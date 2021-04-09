import styled from 'styled-components';
import {useContext} from 'react';

import SubmitButton from '../components/SubmitALinkButton';
import OrderBy from '../components/OrderBy';
import ListItem from '../components/ListItem';
import AppContext from '../contexts/AppContext';
import Pagination from '../components/Pagination';

const Container = styled.div`
    width: 400px;
    margin: 20px auto;
`;
const Content = styled.div`
    padding: 0 15px;
`;
const ListContainer = styled.div`
    min-height: 420px;
    margin-bottom: 20px;
`;

function List() {
    const context = useContext(AppContext);
    const {linkList, linkPage} = context.state;

    return (
            <AppContext.Consumer>
                {context  => 
                    <Container>
                        <SubmitButton/>
                        <Content>
                            <OrderBy/>
                            <ListContainer>
                                {linkPage.map((listItem, key) => 
                                    <ListItem key={key} data={listItem}/>)}
                            </ListContainer>
                            <Pagination />
                        </Content>
                    </Container>
                }
            </AppContext.Consumer>
    )
}

export default List;