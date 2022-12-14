import * as React from "react";
import { Image } from "react-native";
import BoxCreditCard from "../BoxCreditCard";
import MpButton from "../Button";
import {
  BoxAmount,
  Container,
  More,
  RowOne,
  RowThree,
  RowTwo,
  TextAmount,
} from "./styles";

export default function CardHeader() {
  return (
    <Container>
      <RowOne>
        <BoxAmount>
          <TextAmount>R$ 2.000</TextAmount>
          <Image
            style={{ width: 44, height: 34 }}
            source={require("../../assets/eye-not.png")}
          />
        </BoxAmount>
        <More>
          <Image
            style={{ width: 18, height: 18 }}
            source={require("../../assets/right-black.png")}
          />
        </More>
      </RowOne>

      <RowTwo>
        <MpButton title="Depositar" />
        <MpButton title="Transferir" />
        <MpButton title="Sacar" />
        <MpButton title="Empréstimo" />
      </RowTwo>
      <RowThree>
        <BoxCreditCard />
      </RowThree>
    </Container>
  );
}
