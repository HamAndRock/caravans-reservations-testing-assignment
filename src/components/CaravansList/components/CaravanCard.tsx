import { Card, Image } from "antd";
import styled from "styled-components";

const CardStyled = styled(Card as any)`
  border: 1px solid #edeae3;
  border-radius: 8px;
  margin-bottom: 32px;
`;

const TitlePart = styled.div`
  border-bottom: 1px solid #edeae3;
`;

const CaravanType = styled.div`
  letter-spacing: 1px;
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

const ImageTextGroup = styled.div`
  padding-right: 12px;
`;

const ImagesGroup = styled.div`
  display: flex;
`;

const PricePart = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`;

const Price = styled.div`
  font-weight: bold;
`;

const PriceTitle = styled.div`
  color: #9c8c8c;
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
        <Image width={392} height={190} alt="example" src={props.pictures[0]} />
      }
    >
      <TitlePart>
        <CaravanType>{props.vehicleType}</CaravanType>
        <CardTitle>{props.name}</CardTitle>
      </TitlePart>
      <MiddlePart>
        <MiddlePartText>{props.location}</MiddlePartText>
        <ImagesGroup>
          <ImageTextGroup>
            <Image src="../Icon-Seat.svg" alt="Icon Seat" />
            {props.passengersCapacity}
          </ImageTextGroup>
          <ImageTextGroup>
            <Image src="../Icon-Bed.svg" alt="Icon Bed" /> {props.sleepCapacity}
          </ImageTextGroup>
          {props.shower && (
            <Image
              style={{ paddingRight: "12px" }}
              src="../Icon-Shower.svg"
              alt="Icon Shower"
            />
          )}
          {props.toilet && (
            <Image
              style={{ paddingRight: "12px" }}
              src="../Icon-Toilet.svg"
              alt="Icon Toilet"
            />
          )}
        </ImagesGroup>
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
