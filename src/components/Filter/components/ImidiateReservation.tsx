import { Select, Image } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import FilterContext from "../../../store/FilterContext";
import { Label } from "./PriceSlider";

const { Option } = Select;

const StyledBlock = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 192px;
  width: 100%;
`;

const LabelBlockStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ImidiateReservation = () => {
  const { setFilterReservation } = useContext(FilterContext);

  const handleChange = (value: string) => {
    value === "yes" ? setFilterReservation(true) : setFilterReservation(false);
  };

  return (
    <StyledBlock>
      <LabelBlockStyled>
        <Label>Okamžitá rezervace</Label>
        <Image src="../IconActionFilter.svg" alt="Icon Action Filter" />
      </LabelBlockStyled>
      <Select style={{ width: 120 }} defaultValue="Ano" onChange={handleChange}>
        <Option value="yes">Ano</Option>
        <Option value="no">Ne</Option>
      </Select>
    </StyledBlock>
  );
};

export default ImidiateReservation;
