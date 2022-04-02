import { Button } from "antd";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CaravanCard, { CaravanCardProps } from "./components/CaravanCard";

const CaravanListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 100px;
  padding: 32px 0px;
`;

const ButtonPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 115px;
`;

const ButtonStyled = styled(Button as any)`
  border-radius: 8px;
  background-color: #119383;
  color: white;
`;

const CaravanLists = () => {
  const [caravanList, setCaravanList] = useState<Array<CaravanCardProps>>([]);
  const [caravansCount, setCaravansCount] = useState<number>(0);
  const [error, setError] = useState<string>();

  const getCaravans = useCallback(async () => {
    try {
      const response = await fetch("/api/data");
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      console.log(data);
      setCaravanList(data.items);
      setCaravansCount(data.count);
    } catch (e: any) {
      setError(e.message || "Something went wrong!");
    }
  }, []);

  useEffect(() => {
    getCaravans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CaravanListStyled>
        {caravanList && caravanList.length > 0 ? (
          caravanList.map((caravan) => {
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
      <ButtonPart>
        <ButtonStyled size="large">Načíst další</ButtonStyled>
      </ButtonPart>
    </>
  );
};

export default CaravanLists;
