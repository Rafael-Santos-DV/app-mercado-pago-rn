import * as React from "react";
import { Column, Container, IconFooter, Image, QrCode, Text } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Column>
        <IconFooter name="home" active />
        <Text active>Início</Text>
      </Column>
      <Column>
        <Image source={require("../../assets/atividade.jpg")} />
        <Text>Atividade</Text>
      </Column>
      <QrCode>
        <Image source={require("../../assets/qrcode.jpg")} />
        <Text style={{ color: "#fff" }}>PIX</Text>
      </QrCode>
      <Column>
        <Image source={require("../../assets/notification.jpg")} />
        <Text>Notificações</Text>
      </Column>
      <Column>
        <Image source={require("../../assets/settings.jpg")} />
        <Text>Mais</Text>
      </Column>
    </Container>
  );
};

export default Footer;
