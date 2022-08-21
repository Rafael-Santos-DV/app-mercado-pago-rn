import * as React from "react";
import { Text } from "react-native";
import {
  ColumnInstallments,
  Container,
  RowOne,
  Title,
  RowText,
  TextIns,
  List,
  ImageL,
  TextL,
  BoxList,
  BoxImage,
  Footer,
  TextFooter,
} from "./styles";

const CardLevelSix: React.FC = () => {
  return (
    <Container>
      <RowOne>
        <Title>Acesse o nível 6</Title>
        <ColumnInstallments>
          <TextIns
            through
            style={{ fontFamily: "Inter_300Light", fontSize: 12 }}
          >
            R$ 49,99
          </TextIns>

          <RowText>
            <TextIns style={{ fontSize: 20 }}>R$ 14</TextIns>
            <TextIns style={{ fontSize: 10, textAlignVertical: "top" }}>
              99
            </TextIns>
            <TextIns
              style={{
                fontFamily: "Inter_300Light",
                fontSize: 13,
                textAlignVertical: "center",
              }}
            >
              /mês
            </TextIns>
          </RowText>
        </ColumnInstallments>
      </RowOne>

      <List>
        <Text style={{ fontFamily: "Inter_800ExtraBold", padding: 4 }}>
          Conte com os melhores benefícios no Mercado Livre e do Mercado Pago
        </Text>

        <BoxList>
          <BoxImage>
            <ImageL
              source={require("../../assets/disney.jpg")}
              style={{ width: 45, height: 30 }}
            />
          </BoxImage>
          <TextL>Disney+ sem custo</TextL>
        </BoxList>
        <BoxList>
          <BoxImage>
            <ImageL
              source={require("../../assets/star.jpg")}
              style={{ width: 50, height: 35 }}
            />
          </BoxImage>
          <TextL>Star+ sem custo</TextL>
        </BoxList>
        <BoxList>
          <BoxImage>
            <ImageL
              source={require("../../assets/frete.jpg")}
              style={{ width: 50, height: 35 }}
            />
          </BoxImage>
          <TextL>
            Frete grátis e rápido a partir de R$ 79 e 45% OFF em frete de menos
            de R$ 79
          </TextL>
        </BoxList>
        <BoxList>
          <BoxImage>
            <ImageL
              source={require("../../assets/desconto.jpg")}
              style={{ width: 40, height: 35 }}
            />
          </BoxImage>
          <TextL>Mais descontos no Mercado Pago</TextL>
        </BoxList>
      </List>
      <Footer>
        <TextFooter>Assine</TextFooter>
        <TextFooter>{">"}</TextFooter>
      </Footer>
    </Container>
  );
};

export default CardLevelSix;
