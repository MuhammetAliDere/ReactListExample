import styled from 'styled-components';

const ButtonStyled = styled.button`
    border: none;
    width: 150px;
    height: 50px;
    background-color: #000;
    color: #fff;
    font-size: 22px;
    border-radius: 30px;
    cursor: pointer;
`;

function Button(props){
    return(
        <ButtonStyled onClick={_ => props.clicked()}>
            {props.children}
        </ButtonStyled>
    )
}

export default Button;