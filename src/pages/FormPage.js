import { Link as RouterLink} from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';

import AppContext from '../contexts/AppContext';
import Button from '../components/Button';

const Container = styled.div`
    width: 400px;
    margin: 10px auto;
    text-align: left;
    padding-top: 30px;
    position: relative;
`;
const Link = styled(RouterLink)`
    text-decoration: none;
    color: inherit;
    z-index: 100;
    position: absolute;
    top: 0;
`;
const LeftArrow = styled(BiLeftArrowAlt)`
    font-size: 24px;
    display: inline-block;
    margin-bottom: -5px;
`;
const FormTitle = styled.h1`

`;
const Label = styled.label`
    display: block;
    margin-top: 30px;
    & input {
        display: block;
        height: 45px;
        border: 1px solid #b9b9b9;
        border-radius: 5px;
        width: 100%;
        font-size: 22px;
        padding-left: 7px;
        box-sizing: border-box;
    }
    & span {
        display: inline-block;
        margin-left: 7px;
    }
`;
const AddButton = styled.div`
    float: right;
    margin-top: 20px;
`;

function Form() {
    const context = useContext(AppContext);
    
    return (
        <Container>
            <Link to="/">
                <LeftArrow />
                Return to List
            </Link>
            <FormTitle>
                Add New Link
            </FormTitle>
            <div>
                <Label>
                    <span>Link Name:</span>
                    <input type="text" name="linkName" 
                        value={context.state.linkName} 
                        onChange={e => context.actions.onInputchange(e)}/>
                </Label>
                <Label>
                    <span>Link URL:</span>
                    <input type="text" name="linkUrl" 
                        value={context.state.linkUrl} 
                        onChange={e => context.actions.onInputchange(e)}/>
                </Label>
                <AddButton>
                    <Button clicked={() => context.actions.addNewLink()}>ADD</Button>
                </AddButton>
            </div>
        </Container>
    )
}

export default Form;