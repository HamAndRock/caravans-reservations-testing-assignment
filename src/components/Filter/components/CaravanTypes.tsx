import { useCallback, useContext } from "react";
import { Card } from "antd";
import styled from "styled-components";
import { Label } from "./PriceSlider";
import FilterContext from "../../../store/FilterContext";
import { caravanTypes, caravanTypesEn, colors } from "../../../constants";

const TypesStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
`;

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: start;
  gap: 8px;
`;

const CardStyled = styled(Card as any)`
  max-width: 156px;
  max-height: 88px;
  border-radius: 8px;
  font-size: 12px;
`;

const CardTitleStyled = styled.div`
  font-size: 14px;
  color: black;
`;

const CardTextStyled = styled.div`
  color: ${colors.cardText};
  font-size: 10px;
  padding-top: 4px;
`;

const CaravanTypes = () => {
  const { filterType, setFilterType } = useContext(FilterContext);

  // manage selected caravans type
  const handleOnClick = useCallback(
    (value: string) => {
      if (filterType.find((v) => v === value)) {
        setFilterType((prevState: Array<string>) => {
          const newArr: Array<string> = prevState.filter(
            (v: string) => v !== value
          );
          return newArr;
        });
      } else {
        setFilterType((prevState: Array<string>) => [...prevState, value]);
      }
    },
    [filterType, setFilterType]
  );

  return (
    <TypesStyled>
      <Label>Caravan types </Label>
      <CardGroup>
        <CardStyled
          style={
            filterType.find((type) => type === caravanTypesEn.campervan)
              ? { border: `2px solid ${colors.green}` }
              : {}
          }
          bordered={true}
          hoverable={true}
          onClick={(e: any) => {
            e.preventDefault;
            handleOnClick(caravanTypesEn.campervan);
          }}
        >
          <CardTitleStyled>{caravanTypes.campervan}</CardTitleStyled>
          <CardTextStyled>
            Obytka s rozměry osobáku, se kterou dojedete všude.
          </CardTextStyled>
        </CardStyled>
        <CardStyled
          style={
            filterType.find((type) => type === caravanTypesEn.intergrated)
              ? { border: `2px solid ${colors.green}` }
              : {}
          }
          bordered={true}
          hoverable={true}
          onClick={(e: any) => {
            e.preventDefault;
            handleOnClick(caravanTypesEn.intergrated);
          }}
        >
          <CardTitleStyled>{caravanTypes.integral}</CardTitleStyled>
          <CardTextStyled>Král mezi karavany. Luxus na kolech.</CardTextStyled>
        </CardStyled>
        <CardStyled
          style={
            filterType.find((type) => type === caravanTypesEn.builtIn)
              ? { border: `2px solid ${colors.green}` }
              : {}
          }
          bordered={true}
          hoverable={true}
          onClick={(e: any) => {
            e.preventDefault;
            handleOnClick(caravanTypesEn.builtIn);
          }}
        >
          <CardTitleStyled>{caravanTypes.vestavba}</CardTitleStyled>
          <CardTextStyled>
            Celý byt geniálně poskládaný do dodávky.
          </CardTextStyled>
        </CardStyled>
        <CardStyled
          style={
            filterType.find((type) => type === caravanTypesEn.alcove)
              ? { border: `2px solid ${colors.green}` }
              : {}
          }
          bordered={true}
          hoverable={true}
          onClick={(e: any) => {
            e.preventDefault;
            handleOnClick(caravanTypesEn.alcove);
          }}
        >
          <CardTitleStyled>{caravanTypes.prives}</CardTitleStyled>
          <CardTextStyled>
            Tažný karavan za vaše auto. Od kapkovitých až po rodinné.
          </CardTextStyled>
        </CardStyled>
      </CardGroup>
    </TypesStyled>
  );
};

export default CaravanTypes;
