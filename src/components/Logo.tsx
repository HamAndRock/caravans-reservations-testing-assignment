import { Image } from "antd";
import styled from "styled-components";

const LogoStyled = styled.div`
  padding: 22px 0;
  max-width: 1440px;
  margin: 0 7%;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

const Logo = () => {
  return (
    <LogoStyled>
      <Image src="../PragueLabslogo.svg" alt="Prague Labs Logo" />
    </LogoStyled>
  );
};

export default Logo;
