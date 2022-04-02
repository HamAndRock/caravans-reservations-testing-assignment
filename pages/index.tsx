import styled from "styled-components";
import Filter from "../src/components/Filter/index";
import Logo from "../src/components/Logo";
import CaravansList from "../src/components/CaravansList/CaravansList";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <Logo />
        <Filter />
        <CaravansList />
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div``;

export default Home;
