import styled from "styled-components";
import CaravanTypes from "./components/CaravanTypes";
import ImidiateReservation from "./components/ImidiateReservation";
import PriceSlider from "./components/PriceSlider";

const BlockWithLines = styled.div`
  border-top: 1px solid #cfcfcf;
  border-bottom: 1px solid #cfcfcf;
  padding: 23px 0;
  margin: 0 auto;
`;

const FilterBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 7%;
  gap: 32px;

  @media (max-width: 500px) {
    margin-right: 32px;
    margin-left: 16px;
  }
`;

const Filter = () => {
  return (
    <BlockWithLines>
      <FilterBlock>
        <PriceSlider />
        <CaravanTypes />
        <ImidiateReservation />
      </FilterBlock>
    </BlockWithLines>
  );
};

export default Filter;
