import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled(Link)`
    padding-bottom: 20px;
    border-bottom: 3px solid #ececec;
`;
const Button = styled.button`
    background-color: #f7f7f7;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
`;
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const Icon = styled.div`
    width: 120px;
    height: 120px;
    font-size: 100px;
    background-color: #ececec;
    align-self: flex-start;
    border-radius: 5px;
`;
const Label = styled.div`
    flex: 1;
    font-size: 30px;
    font-weight: bold;
`;

function SubmitButton() {
    return (
        <Container to="/add-new">
            <Button>
                <ButtonWrapper>
                    <Icon>+</Icon>
                    <Label>SUBMIT A LINK</Label>
                </ButtonWrapper>
            </Button>
        </Container>
    )
}

export default SubmitButton;