import { Select, Switch } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { Label } from "./PriceSlider";

const { Option } = Select;

const StyledBlock = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 192px;
  width: 100%;
`;

const ImidiateReservation = () => {
  const [imidiateReservation, setImidiateReservation] =
    useState<boolean>(false);
  const handleChange = (value: any) => {
    if (value === "yes") {
      setImidiateReservation(true);
    } else {
      setImidiateReservation(false);
    }
  };
  return (
    <StyledBlock>
      <Label>Okamžitá rezervace</Label>
      <Select defaultValue="Ano" style={{ width: 120 }} onChange={handleChange}>
        <Option value="yes">Ano</Option>
        <Option value="no">Ne</Option>
      </Select>
    </StyledBlock>
  );
};

export default ImidiateReservation;
