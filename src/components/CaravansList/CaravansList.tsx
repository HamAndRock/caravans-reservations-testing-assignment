import { Button } from "antd";
import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import FilterContext from "../../store/FilterContext";
import CaravanCard, { CaravanCardProps } from "./components/CaravanCard";

const CaravanListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 100px;
  padding: 32px 0px 0px;
  gap: 32px;
  justify-content: center;

  @media (max-width: 500px) {
    margin: 0px 16px;
  }
`;

const ButtonPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
  margin-top: 16px;
`;

const ButtonStyled = styled(Button as any)`
  border-radius: 8px;
  background-color: ${colors.green};
  color: white;
  margin-top: 32px;
`;

const CaravanLists = () => {
  const [caravanList, setCaravanList] = useState<Array<CaravanCardProps>>([]);
  const [filteredCaravans, setFilteredCaravans] = useState<
    Array<CaravanCardProps>
  >([]);
  const [error, setError] = useState<string>();
  const [shownItemsNumber, setShownItemsNumber] = useState<number>(6);

  const { filterReservation, filterPriceMax, filterPriceMin, filterType } =
    useContext(FilterContext);

  const getCaravans = useCallback(async () => {
    try {
      const response = await fetch("/api/data");
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      setCaravanList(data.items);
    } catch (e: any) {
      setError(e.message || "Something went wrong!");
    }
  }, []);

  const handleShowMoreItems = useCallback(() => {
    if (shownItemsNumber + 6 <= filteredCaravans.length) {
      setShownItemsNumber((prevState) => prevState + 6);
    } else {
      setShownItemsNumber(filteredCaravans.length);
    }
  }, [filteredCaravans.length, shownItemsNumber]);

  useEffect(() => {
    getCaravans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (caravanList.length !== 0) {
      const farr: Array<CaravanCardProps> = caravanList.filter(
        (caravan) =>
          caravan.instantBookable === filterReservation &&
          +caravan.price <= filterPriceMax &&
          +caravan.price >= filterPriceMin &&
          (filterType.length === 0 || filterType.includes(caravan.vehicleType))
      );
      setFilteredCaravans(farr);
      if (shownItemsNumber === filteredCaravans.length) {
        setShownItemsNumber(6);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    caravanList,
    filterPriceMax,
    filterPriceMin,
    filterReservation,
    filterType,
    filteredCaravans.length,
  ]);

  return (
    <>
      <CaravanListStyled>
        {filteredCaravans.length > 0 ? (
          filteredCaravans.slice(0, shownItemsNumber).map((caravan) => {
            if (caravan.instantBookable === filterReservation)
              return (
                <CaravanCard
                  key={Math.random()}
                  location={caravan.location}
                  instantBookable={caravan.instantBookable}
                  name={caravan.name}
                  passengersCapacity={caravan.passengersCapacity}
                  pictures={caravan.pictures}
                  sleepCapacity={caravan.sleepCapacity}
                  price={caravan.price}
                  toilet={caravan.toilet}
                  shower={caravan.shower}
                  vehicleType={caravan.vehicleType}
                />
              );
          })
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>Loading...</div>
        )}
      </CaravanListStyled>
      {shownItemsNumber < filteredCaravans.length && (
        <ButtonPart>
          <ButtonStyled size="large" onClick={handleShowMoreItems}>
            Načíst další
          </ButtonStyled>
        </ButtonPart>
      )}
    </>
  );
};

export default CaravanLists;
