import styled from "styled-components";
import Filter from "../src/components/Filter/Filter";
import Logo from "../src/components/Logo";
import CaravansList from "../src/components/CaravansList/CaravansList";
import FilterReducer from "../src/store/FilterProvider";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <Logo />
        <FilterReducer>
          <Filter />
          <CaravansList />
        </FilterReducer>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  padding-bottom: 45px;
`;

export default Home;
