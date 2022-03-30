import styled from "styled-components";
import { Heading } from "../src/components/LayoutComponents";
import Filter from "../src/components/Filter/index";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <Heading>Сaravans reservation</Heading>
        <Filter />
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white !importnat;
`;

export default Home;
