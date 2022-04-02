import styled from "styled-components";
import CaravanTypes from "./components/CaravanTypes";
import ImidiateReservation from "./components/ImidiateReservation";
import PriceSlider from "./components/PriceSlider";

const FilterStyled = styled.div`
  border-top: 1px solid #cfcfcf;
  border-bottom: 1px solid #cfcfcf;
  padding: 23px 0;
  margin: 0 auto;
`;

const FilterStyled2 = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 100px;
`;

const Filter = () => {
  return (
    <FilterStyled>
      <FilterStyled2>
        <PriceSlider />
        <CaravanTypes />
        <ImidiateReservation />
      </FilterStyled2>
    </FilterStyled>
  );
};

export default Filter;
