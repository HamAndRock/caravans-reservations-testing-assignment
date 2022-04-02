import styled from "styled-components";
import Filter from "../src/components/Filter/index";
import Logo from "../src/components/Logo";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <Logo />
        <Filter />
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  // max-width: 1440px;
`;

export default Home;
