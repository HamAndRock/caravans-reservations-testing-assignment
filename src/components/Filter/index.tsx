import styled from "styled-components";
import CaravanTypesCheckbox from "./components/CaravanTypesCheckbox";
import ImidiateReservationSwitch from "./components/ImidiateReservationSwitch";
import PriceSlider from "./components/PriceSlider";

const FilterStyled = styled.div`
  background-color: #4f0036;
  border-radius: 8px;
  border-style: solid;
  border-width: 15px;
  border-color: #610d46;
  align-items: center;
`;

const Filter = () => {
  return (
    <FilterStyled>
      <PriceSlider />
      <CaravanTypesCheckbox />
      <ImidiateReservationSwitch />
    </FilterStyled>
  );
};

export default Filter;
