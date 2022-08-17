import * as React from "react";
import { Image } from "react-native";
import MpButton from "../Button";
import {
  BoxAmount,
  Container,
  More,
  RowOne,
  RowTwo,
  TextAmount,
} from "./styles";

export default function CardHeader() {
  return (
    <Container>
      <RowOne>
        <BoxAmount>
          <TextAmount>R$ 0</TextAmount>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../assets/eye-ok.png")}
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
    </Container>
  );
}
