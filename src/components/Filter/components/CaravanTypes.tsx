import { useCallback, useEffect, useState } from "react";
import { Card, Checkbox, Col, Divider, Row } from "antd";
import styled from "styled-components";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { Label } from "./PriceSlider";

const TypesCheckboxStyled = styled.div`
  display: flex;
  margin: 0px 20px;
  flex-direction: column;
  width: 100%;
`;

const CardGroup = styled.div`
  display: flex;
  align-self: start;
`;

const CardStyled = styled(Card as any)`
  border-radius: 8px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  font-size: 14px;
`;

const CaravanTypes = () => {
  const [allSelectedTypes, setAllSelectedTypes] = useState<Array<string>>([]);
  const [stylesForSelectedType, setStylesForSelectedType] = useState<Object>(
    {}
  );

  const handleOnClick = useCallback(
    (value) => {
      if (allSelectedTypes.find((v) => v === value)) {
        setAllSelectedTypes((prevState) => {
          const newArr = prevState.filter((v) => v !== value);
          return newArr;
        });
        setStylesForSelectedType({});
      } else {
        setAllSelectedTypes((prevState) => [...prevState, value]);
        setStylesForSelectedType({ border: "2px solid #119383" });
      }
    },
    [allSelectedTypes]
  );

  return (
    <TypesCheckboxStyled>
      <Label>Caravan types </Label>
      <CardGroup>
        <CardStyled
          title="Campervan"
          bordered={true}
          hoverable={true}
          onClick={(e) => {
            e.preventDefault;
            handleOnClick("Campervan");
          }}
        >
          Obytka s rozměry osobáku, se kterou dojedete všude.
        </CardStyled>
        <CardStyled
          title="Integrál"
          bordered={true}
          hoverable={true}
          onClick={(e) => {
            e.preventDefault;
            handleOnClick("Integrál");
          }}
        >
          Král mezi karavany. Luxus na kolech.
        </CardStyled>
        <CardStyled
          title="Vestavba"
          bordered={true}
          hoverable={true}
          onClick={(e) => {
            e.preventDefault;
            handleOnClick("Vestavba");
          }}
        >
          Celý byt geniálně poskládaný do dodávky.
        </CardStyled>
        <CardStyled
          style={{ marginRight: "0px !important" }}
          title="Přívěs"
          bordered={true}
          hoverable={true}
          onClick={(e) => {
            e.preventDefault;
            handleOnClick("Prives");
          }}
        >
          Tažný karavan za vaše auto. Od kapkovitých až po rodinné.
        </CardStyled>
      </CardGroup>
    </TypesCheckboxStyled>
  );
};

export default CaravanTypes;
