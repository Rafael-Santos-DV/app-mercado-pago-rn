import React, { Children } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, TextButton } from "./styles";

type ButtonType = {
  title: string;
  colorTextButton?: string;
} & TouchableOpacityProps;

const MpButton: React.FC<ButtonType> = ({
  title,
  colorTextButton,
  ...props
}) => {
  return (
    <Container {...props}>
      <TextButton style={{ color: colorTextButton || "#009fe3" }}>
        {title}
      </TextButton>
    </Container>
  );
};

export default MpButton;
