import * as React from "react";
import { ImageSourcePropType, ImageStyle } from "react-native";
import { Box, Container, ServiceImage, Title } from "./styles";

type TypeService = {
  title: string;
  image: ImageSourcePropType;
  style?: ImageStyle;
};

const Service: React.FC<TypeService> = ({ image, title, style }) => {
  return (
    <Container>
      <Box>
        <ServiceImage source={image} style={style} />
      </Box>
      <Title>{title}</Title>
    </Container>
  );
};

export default Service;
