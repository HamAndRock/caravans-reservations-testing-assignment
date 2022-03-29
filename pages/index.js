import styled from "styled-components";
import { Heading } from "../src/components/LayoutComponents";
import PriceSlider from "../src/components/PriceSlider";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <Heading>Сaravans reservation</Heading>
        <PriceSlider />
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-around;
  // color: white;
`;

export default Home;
