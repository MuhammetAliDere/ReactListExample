import styled from 'styled-components';

import logo from '../images/logo.png';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid #a2a2a2;
`;
const LogoWrapper = styled.div`

`;
const Statement = styled.div`
    align-self: flex-end;
    font-size: 30px;
`;
const LightFont = styled.span`
    font-weight: lighter;
`;

function Header() {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt="hepsiburada.com"/>
            </LogoWrapper>
            <Statement>
                <b>Link</b>
                <LightFont>VOTE</LightFont> Challenge
            </Statement>
        </Container>
    )
}

export default Header