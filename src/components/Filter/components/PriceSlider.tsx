import styled from "styled-components";
import { Input, Slider } from "antd";
import { useCallback, useContext } from "react";
import FilterContext from "../../../store/FilterContext";
import { colors, maxPrice, minPrice, priceStep } from "../../../constants";

const PriceSliderStyled = styled.div`
  max-width: 328px;
  width: 100%;
`;

export const Label = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  color: ${colors.grayLabel};
`;

const InputGroupStyled = styled.div`
  margin-top: 26px;
  display: flex;
  gap: 16px;
`;

const SliderStyled = styled(Slider as any)`
  margin-top: 26px;
`;

const PriceSlider = () => {
  const {
    filterPriceMin,
    setFilterPriceMin,
    filterPriceMax,
    setFilterPriceMax,
  } = useContext(FilterContext);

  const onChange = (value: Array<number>) => {
    setFilterPriceMin(value[0]);
    setFilterPriceMax(value[1]);
  };

  const onChangeMinInputNumber = useCallback(
    (e) => {
      setFilterPriceMin(e.target.value);
    },
    [setFilterPriceMin]
  );

  const onChangeMaxInputNumber = useCallback(
    (e) => {
      setFilterPriceMax(e.target.value);
    },
    [setFilterPriceMax]
  );

  return (
    <PriceSliderStyled>
      <Label>Cena za den</Label>
      <SliderStyled
        range
        min={minPrice}
        max={maxPrice}
        step={priceStep}
        onChange={onChange}
        value={[filterPriceMin, filterPriceMax]}
        trackStyle={{ backgroundColor: colors.green }}
        handleStyle={{
          backgroundColor: colors.green,
          border: colors.green,
        }}
      />
      <InputGroupStyled>
        <Input
          min={minPrice}
          max={maxPrice}
          value={filterPriceMin}
          onChange={onChangeMinInputNumber}
          addonAfter="Kč"
          type="number"
        />
        <Input
          min={minPrice}
          max={maxPrice}
          value={filterPriceMax}
          onChange={onChangeMaxInputNumber}
          addonAfter="Kč"
          type="number"
        />
      </InputGroupStyled>
    </PriceSliderStyled>
  );
};

export default PriceSlider;
