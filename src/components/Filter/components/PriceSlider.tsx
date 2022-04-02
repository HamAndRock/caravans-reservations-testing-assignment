import styled from "styled-components";
import { InputNumber, Slider } from "antd";
import { useState } from "react";

const PriceSliderStyled = styled.div`
  flex-direction: column;
  max-width: 344px;
  width: 100%;
`;

export const Label = styled.div`
  flex-wrap: nowrap;
  font-size: 18px;
  color: #a9a9a9;
  margin-bottom: 16px;
`;

const InputNumberStyled = styled.div`
  margin-top: 26px;
  display: flex;
`;

const SliderStyled = styled(Slider as any)`
  margin-top: 26px;
  color: green;
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
      <Label>Cena za den</Label>
      <SliderStyled
        range
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={[minInputValue, maxInputValue]}
        trackStyle={{ "background-color": "#119383" }}
        handleStyle={{
          "background-color": "#119383",
          border: "#119383",
        }}
      />
      <InputNumberStyled>
        <InputNumber
          style={{ width: "50%", maxWidth: "156px", marginRight: "16px" }}
          min={min}
          max={max}
          value={minInputValue}
          defaultValue={min}
          onChange={onChangeMinInputNumber}
          addonAfter="Kč"
        />
        <InputNumber
          style={{ width: "50%", maxWidth: "156px" }}
          min={min}
          max={max}
          step={step}
          value={maxInputValue}
          defaultValue={max}
          onChange={onChangeMaxInputNumber}
          addonAfter="Kč"
        />
      </InputNumberStyled>
    </PriceSliderStyled>
  );
};

export default PriceSlider;
