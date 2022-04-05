import { Card, Image } from "antd";
import styled from "styled-components";
import { colors } from "../../../constants";

const CardStyled = styled(Card as any)`
  border: 1px solid #edeae3;
  border-radius: 8px;
  max-width: 392px;
  min-width: 343px;
  width: 100%;
`;

const TitlePart = styled.div`
  border-bottom: 1px solid #edeae3;
`;

const CaravanTypeTitle = styled.div`
  color: #ff5e55;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`;

const CardTitle = styled.div`
  color: #1f2244;
  font-weight: bold;
  font-size: 24px;
  padding-bottom: 5px;
`;

const MiddlePart = styled.div`
  border-bottom: 1px solid #edeae3;
  padding-top: 9px;
  padding-bottom: 14px;
`;

const MiddlePartText = styled.div`
  color: #1f2244;
  font-size: 14px;
  padding-bottom: 9px;
`;

const IconsGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const PricePart = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  font-size: 16px;
`;

const Price = styled.div`
  font-weight: bold;
`;

const PriceTitle = styled.div`
  color: ${colors.cardText};
`;

export interface CaravanCardProps {
  location: string;
  instantBookable: true;
  name: string;
  passengersCapacity: string;
  pictures: string;
  sleepCapacity: string;
  price: Array<string>;
  toilet: string;
  shower: string;
  vehicleType: string;
}

const CaravanCard = (props: CaravanCardProps) => {
  return (
    <CardStyled
      style={{ width: 392 }}
      cover={
        <Image
          style={{
            maxWidth: "392px",
            minWidth: "344px;",
            width: "100%",
            objectFit: "cover",
          }}
          height={190}
          alt="example"
          src={props.pictures[0]}
        />
      }
    >
      <TitlePart>
        <CaravanTypeTitle>{props.vehicleType}</CaravanTypeTitle>
        <CardTitle>{props.name}</CardTitle>
      </TitlePart>
      <MiddlePart>
        <MiddlePartText>{props.location}</MiddlePartText>
        <IconsGroup>
          <Image src="../Icon-Seat.svg" alt="Icon Seat" />
          {props.passengersCapacity}
          <Image src="../Icon-Bed.svg" alt="Icon Bed" /> {props.sleepCapacity}
          {props.shower && <Image src="../Icon-Shower.svg" alt="Icon Shower" />}
          {props.toilet && <Image src="../Icon-Toilet.svg" alt="Icon Toilet" />}
        </IconsGroup>
      </MiddlePart>
      <PricePart>
        <PriceTitle>Cena od</PriceTitle>
        <Price>
          {props.price} Kč/den
          <Image
            style={{ paddingLeft: "8px" }}
            src="../IconActionFilter.svg"
            alt="Icon Action Filter"
          />
        </Price>
      </PricePart>
    </CardStyled>
  );
};

export default CaravanCard;
