import { createContext, Dispatch, SetStateAction } from "react";

interface FilterContext {
  filterPriceMin: number;
  setFilterPriceMin: Dispatch<number>;
  filterPriceMax: number;
  setFilterPriceMax: Dispatch<number>;
  filterType: Array<string>;
  setFilterType: Dispatch<SetStateAction<Array<string>>>;
  filterReservation: boolean;
  setFilterReservation: Dispatch<boolean>;
}

const FilterContext = createContext<FilterContext>({} as FilterContext);

export default FilterContext;
