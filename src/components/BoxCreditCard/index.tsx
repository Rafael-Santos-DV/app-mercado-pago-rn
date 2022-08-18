import * as React from "react";
import { Image } from "react-native";
import {
  Balance,
  BoxImages,
  CardText,
  CircleImage,
  ColumnOne,
  ColumnTwo,
  Container,
  FirstRow,
  ImageCard,
  Right,
  RowColumnTwo,
  TextRow,
} from "./styles";

const BoxCreditCard: React.FC = () => {
  return (
    <Container>
      <ColumnOne
        source={require("../../assets/background-credit_card.jpg")}
        resizeMode="cover"
      >
        <FirstRow>
          <BoxImages>
            <Image
              source={require("../../assets/visa.png")}
              style={{ width: 30, height: 30, marginRight: 5 }}
            />
            <Image
              source={require("../../assets/logo-mp.png")}
              style={{ width: 22, height: 15 }}
            />
          </BoxImages>
          <Right>
            <Image
              source={require("../../assets/right-white.png")}
              style={{ width: 12, height: 12 }}
            />
          </Right>
        </FirstRow>

        <CardText style={{ fontSize: 13 }}>Limite disponível</CardText>
        <Balance>R$ 10,58</Balance>
        <CardText style={{ fontSize: 11 }}>Fatura vence em 17/08</CardText>
      </ColumnOne>
      <ColumnTwo>
        <RowColumnTwo
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ffffff42",
            marginBottom: 3,
            paddingBottom: 3,
          }}
        >
          <CircleImage>
            <ImageCard source={require("../../assets/credit_card.png")} />
          </CircleImage>
          <TextRow>Cartão Virtual</TextRow>
        </RowColumnTwo>
        <RowColumnTwo>
          <CircleImage>
            <ImageCard source={require("../../assets/contactless.png")} />
          </CircleImage>
          <TextRow>Aproxime o celular e pague</TextRow>
        </RowColumnTwo>
      </ColumnTwo>
    </Container>
  );
};

export default BoxCreditCard;
