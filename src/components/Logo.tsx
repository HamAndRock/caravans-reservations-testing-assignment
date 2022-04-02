import { Image } from "antd";
import styled from "styled-components";

const LogoStyled = styled.div`
  padding: 23px 0;
  max-width: 1440px;
  margin: 0 100px;
`;

const Logo = () => {
  return (
    <LogoStyled>
      <Image src="../PragueLabslogo.svg" alt="Prague Labs Logo" />
    </LogoStyled>
  );
};

export default Logo;
