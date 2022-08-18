import {
  useFonts,
  Inter_300Light,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import React from "react";
import { Image } from "react-native";
import CardHeader from "../../components/CardHeader";
import {
  Box,
  BoxHeadphone,
  BoxPix,
  BoxProfile,
  Cards,
  Container,
  ContentRight,
  Header,
  ImageCard,
  ImageProfile,
  MpContent,
  Profile,
  TextCard,
  TextPix,
  TextProfile,
} from "./styles";

export default function Home() {
  const [fontLoad] = useFonts({
    Inter_300Light,
    Inter_800ExtraBold,
  });

  if (!fontLoad) {
    return null;
  }

  return (
    <Container>
      <Header>
        <Profile>
          <BoxProfile>
            <ImageProfile source={require("../../assets/profile.png")} />
          </BoxProfile>
          <TextProfile style={{ fontFamily: "Inter_800ExtraBold" }}>
            Olá, Rafael
          </TextProfile>
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
        <Cards>
          <Box>
            <ImageCard source={require("../../assets/bitcoin.png")} />
            <TextCard>Compre cripto aparti de R$ 1</TextCard>
          </Box>

          <Box>
            <ImageCard source={require("../../assets/invista-logo.png")} />
            <TextCard>Invista de um jeito fácil</TextCard>
          </Box>
        </Cards>
      </MpContent>
    </Container>
  );
}
