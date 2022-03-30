import styled from "styled-components";
import { InputNumber, Slider } from "antd";
import { useState } from "react";

const PriceSliderStyled = styled.div`
  display: flex;
  margin: 20px 20px 12px;
  flex-direction: column;
`;

export const Label = styled.div`
  flex-wrap: nowrap;
  font-size: 18px;
  margin-right: 16px;
`;

const InputNumberStyled = styled(InputNumber as any)`
  margin: 8px;
  width: auto;
`;

const SliderStyled = styled(Slider as any)`
  width: 100%;
  margin: 8px;
`;

const SliderParts = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  width: 80%;
  align-self: start;
`;

const PriceSlider = () => {
  const min = 500;
  const max = 5000;
  const step = 500;

  const [minInputValue, setMinInputValue] = useState(500);
  const [maxInputValue, setMaxInputValue] = useState(5000);

  const onChange = (value: any) => {
    if (value) {
      setMinInputValue(value[0]);
      setMaxInputValue(value[1]);
    }
  };

  const onChangeMinInputNumber = (value: any) => {
    value && setMinInputValue(value);
  };

  const onChangeMaxInputNumber = (value: any) => {
    value && setMaxInputValue(value);
  };

  return (
    <PriceSliderStyled>
      <Label>Price:</Label>
      <SliderParts>
        <InputNumberStyled
          min={min}
          max={max}
          step={step}
          value={minInputValue}
          defaultValue={min}
          onChange={onChangeMinInputNumber}
          size={"small"}
        />
        <SliderStyled
          range
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          value={[minInputValue, maxInputValue]}
        />
        <InputNumberStyled
          min={min}
          max={max}
          step={step}
          value={maxInputValue}
          defaultValue={max}
          onChange={onChangeMaxInputNumber}
          size={"small"}
        />
      </SliderParts>
    </PriceSliderStyled>
  );
};

export default PriceSlider;
