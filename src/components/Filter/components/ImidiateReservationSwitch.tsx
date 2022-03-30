import { Switch } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { Label } from "./PriceSlider";

const StyledBlock = styled.div`
  display: flex;
  margin: 12px 20px 20px;
  flex-direction: row;
  align-items: center;
`;

const ImidiateReservationSwitch = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const onChange = (checked: any) => {
    setChecked(true);
  };
  return (
    <StyledBlock>
      <Label>Imidiate Reservation:</Label>
      <Switch onChange={onChange} />
    </StyledBlock>
  );
};

export default ImidiateReservationSwitch;
