import  styled from 'styled-components';
import AppContext  from '../contexts/AppContext';
import {useContext} from 'react';

const Container = styled.div`
    padding: 11px 0;
    text-align: left;
    margin-bottom: 10px;
`;
const Select = styled.select`
    padding: 5px;
    font-size: 20px;
    background-color: #f2f2f2;
    border-radius: 5px;
    border: 1px solid #d7d1d1;
`;

function OrderBy() {
    const context = useContext(AppContext);
    return (
        <Container>
            <Select name="orderBy" placeholder="Order By" onChange={e  =>  context.actions.orderByChanged(e)} value={context.state.shortType}>
                <option value="az" >Less Voted (A -> Z)</option>
                <option value="za">Most Voted (Z -> A)</option>
            </Select>
        </Container>
    )
}

export default OrderBy;