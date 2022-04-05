import { useState } from "react";
import { maxPrice, minPrice } from "../constants";
import FilterContext from "./FilterContext";

interface FilteReducerProps {
  children: JSX.Element[] | JSX.Element;
}

const FilterReducer = ({ children }: FilteReducerProps) => {
  const [filterReservation, setFilterReservation] = useState<boolean>(true);
  const [filterPriceMin, setFilterPriceMin] = useState<number>(minPrice);
  const [filterPriceMax, setFilterPriceMax] = useState<number>(maxPrice);
  const [filterType, setFilterType] = useState<Array<string>>([]);

  return (
    <FilterContext.Provider
      value={{
        filterPriceMin,
        setFilterPriceMin,
        filterPriceMax,
        setFilterPriceMax,
        filterType,
        setFilterType,
        filterReservation,
        setFilterReservation,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterReducer;
