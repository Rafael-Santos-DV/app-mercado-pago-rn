import * as React from "react";
import { ImageSourcePropType } from "react-native";
import {
  BoxActivities,
  DateAt,
  ImageAc,
  Label,
  Price,
  ValueAndDate,
} from "./styles";

type TypeActivities = {
  source: ImageSourcePropType;
  label: string;
  price: string;
  dateAt: string;
};

const Activities: React.FC<TypeActivities> = ({
  label,
  price,
  dateAt,
  source,
}) => {
  return (
    <BoxActivities>
      <ImageAc source={source} />
      <Label>{label}</Label>
      <ValueAndDate>
        <Price>R$ {price}</Price>
        <DateAt>{dateAt}</DateAt>
      </ValueAndDate>
    </BoxActivities>
  );
};

export default Activities;
