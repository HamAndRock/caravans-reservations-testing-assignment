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
  align-items: center;
  color: white !importnat;
`;

export default Home;
