import styled from "styled-components";
import { Slider } from "antd";

const PriceSliderStyled = styled.div``;

const PriceSlider = () => {
  const marks = {
    500: "500",
    5000: "5000",
  };

  return (
    <PriceSliderStyled>
      Price:
      <Slider range marks={marks} />
    </PriceSliderStyled>
  );
};

export default PriceSlider;
