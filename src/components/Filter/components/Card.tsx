import { Card } from "antd";
import { useCallback, useState } from "react";

interface TypesCard {
  styles: {};
  title: string;
}

const TypesCard = (props) => {
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
    <Card
      style={{ borderRadius: "8px", ...stylesForSelectedType }}
      title="Campervan"
      bordered={true}
      hoverable={true}
      onClick={(e) => {
        e.preventDefault;
        handleOnClick("Campervan");
      }}
    >
      Obytka s rozměry osobáku, se kterou dojedete všude.
    </Card>
  );
};

export default TypesCard;
