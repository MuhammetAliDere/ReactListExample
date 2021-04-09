import styled from 'styled-components';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import AppContext from '../contexts/AppContext';
import { useContext } from 'react';

const Container = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    max-width: 200px;
    margin: 0 auto;
`;
const Pages = styled.div`
    flex: 1;
    text-align: center;
`;
const PageIndex = styled.span`
    width: 27px;
    height: 27px;
    display: inline-block;
    font-size: 19px;
    cursor: pointer;
    box-sizing: border-box;
    font-weight: bold;
    border: ${props=> props.bordered ? '2px solid #979797': 'none'};
`;
const LeftArrow = styled(BiLeftArrowAlt)`
    font-size: 24px;
    display: inline-block;
    margin-bottom: -5px;
    cursor: pointer;
`;
const RightArrow = styled(BiRightArrowAlt)`
    font-size: 24px;
    display: inline-block;
    margin-bottom: -5px;
    cursor: pointer;
`;

function Pagination() {
    const context = useContext(AppContext);
    const {pageCount,  pageIndex} = context.state;
    const pagesArray = Array(pageCount).fill().map((_, idx) => idx + 1);
    const show = pagesArray.length > 0;
    return(
        <Container show={show}>
            <div>
                <LeftArrow onClick={_ => context.actions.goToPreviusPage()}/>
            </div>
            <Pages>
                {pagesArray.map((item, index) => 
                    <PageIndex bordered={item === pageIndex} key={index} onClick={() => 
                        context.actions.paginate(item)}>{item}</PageIndex>)}
            </Pages>
            <div>
                <RightArrow onClick={_ => context.actions.goToNextPage()}/>
            </div>
        </Container>
    )
}

export default Pagination;