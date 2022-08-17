import React from "react";
import { Image, Text } from "react-native";
import CardHeader from "../../components/CardHeader";
import {
  BoxHeadphone,
  BoxPix,
  BoxProfile,
  Container,
  ContentRight,
  Header,
  ImageProfile,
  MpContent,
  Profile,
  TextPix,
  TextProfile,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Header>
        <Profile>
          <BoxProfile>
            <ImageProfile source={require("../../assets/profile.png")} />
          </BoxProfile>
          <TextProfile>Olá, Rafael</TextProfile>
          <Image
            source={require("../../assets/right.png")}
            style={{ width: 15, height: 12 }}
          />
        </Profile>
        <ContentRight>
          <BoxHeadphone>
            <Image
              source={require("../../assets/headphone.png")}
              style={{
                height: 15,
                width: 15,
              }}
            />
          </BoxHeadphone>

          <BoxPix>
            <Image
              source={require("../../assets/pix.png")}
              style={{ width: 15, height: 15 }}
            />
            <TextPix>Pix</TextPix>
          </BoxPix>
        </ContentRight>
      </Header>

      <MpContent>
        <CardHeader />
      </MpContent>
    </Container>
  );
}
