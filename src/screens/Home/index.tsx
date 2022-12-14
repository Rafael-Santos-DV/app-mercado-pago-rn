import {
  useFonts,
  Inter_300Light,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Activities from "../../components/Activities";
import CardHeader from "../../components/CardHeader";
import CardLevelSix from "../../components/CardLevelSix";
import Footer from "../../components/Footer";
import Service from "../../components/Service";

import {
  Background,
  Box,
  BoxHeadphone,
  BoxPix,
  BoxProfile,
  Cards,
  Container,
  ContainerServices,
  ContentRight,
  ContentText,
  FooterAc,
  Header,
  ImageCard,
  ImageProfile,
  ImageService,
  ItemSlide,
  LinkText,
  MpContent,
  Profile,
  RowAlign,
  RowLevelSix,
  RowSallary,
  RowWrapper,
  SectionActivities,
  SectionSlide,
  TextA,
  TextAc,
  TextCard,
  TextPix,
  TextProfile,
  TitleAc,
  Wrapper,
} from "./styles";

const screenWidth = Dimensions.get("window").width;

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

      <MpContent showsVerticalScrollIndicator={false}>
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
        <RowLevelSix>
          <Text style={{ color: "#fff", fontFamily: "Inter_300Light" }}>
            Acesse o nível 6 por R$ 14,99/mês
          </Text>
          <Image
            source={require("../../assets/right.png")}
            style={{ width: 14, height: 10 }}
          />
        </RowLevelSix>
        <ContainerServices>
          <RowWrapper>
            <Service
              title="Área Pix"
              image={require("../../assets/pix_green.png")}
            />

            <Service
              style={{ width: 20, height: 35 }}
              title="Recarregar celular"
              image={require("../../assets/recarga.png")}
            />

            <Service
              style={{ width: 26, height: 30 }}
              title="Recarregar TV pré-paga"
              image={require("../../assets/recarregar_tv.png")}
            />

            <Service
              style={{ width: 30, height: 25 }}
              title="Contas e serviços"
              image={require("../../assets/contas_e_servicos.png")}
            />
          </RowWrapper>
          <RowWrapper>
            <Service
              title="Cobrar com link"
              image={require("../../assets/cobrar_link.png")}
            />

            <Service
              style={{ width: 30, height: 25 }}
              title="Transferir dinheiro"
              image={require("../../assets/transferir.png")}
            />

            <Service
              style={{ width: 36, height: 30 }}
              title="Seguro para Vida"
              image={require("../../assets/seguro_vida.png")}
            />

            <Service
              style={{ width: 30, height: 25 }}
              title="Ver mais"
              image={require("../../assets/more.png")}
            />
          </RowWrapper>
        </ContainerServices>
        <SectionSlide
          horizontal={true}
          decelerationRate={"fast"}
          snapToAlignment={"center"}
          pagingEnabled
          maxToRenderPerBatch={3}
          initialNumToRender={0}
          windowSize={3}
          showsHorizontalScrollIndicator={false}
        >
          <ItemSlide width={screenWidth} style={{ backgroundColor: "#2D3276" }}>
            <View style={{ flex: 1, padding: 8 }}>
              <LinkText style={{ fontSize: 8, marginBottom: 5 }}>
                Link de pagamento
              </LinkText>
              <LinkText>Cobre pelo whatsapp com o link de pagamento</LinkText>
            </View>
            <Background source={require("../../assets/bg-blue.jpg")} />
          </ItemSlide>

          <ItemSlide width={screenWidth}>
            <View style={{ flex: 1, padding: 8 }}>
              <LinkText style={{ fontSize: 8, marginBottom: 5 }}>
                Seguro para vida
              </LinkText>
              <LinkText>O único com telemedicina diretamente no app!</LinkText>
            </View>
            <Background source={require("../../assets/medico.jpg")} />
          </ItemSlide>

          <ItemSlide width={screenWidth}>
            <View style={{ flex: 1, padding: 8 }}>
              <LinkText style={{ fontSize: 8, marginBottom: 5 }}>
                Investimentos
              </LinkText>
              <LinkText>Comece a investir aparti de R$ 1</LinkText>
            </View>
            <Background source={require("../../assets/graphic.jpg")} />
          </ItemSlide>
        </SectionSlide>

        <RowSallary>
          <Image
            source={require("../../assets/money.jpg")}
            style={{ height: 50, width: 60 }}
          />

          <ContentText>
            <Text style={{ fontFamily: "Inter_300Light" }}>
              Traga seu salário para o mercado pago para ter diversas vantagens.
            </Text>
          </ContentText>
          <Text style={{ fontFamily: "Inter_300Light", fontSize: 20 }}>x</Text>
        </RowSallary>
        <RowAlign>
          <Wrapper>
            <ImageService source={require("../../assets/point.jpg")} />
            <TextA>Recomende a Point e ganhe R$ 110</TextA>
          </Wrapper>
          <Wrapper borderTopBottom>
            <ImageService source={require("../../assets/indique.jpg")} />
            <TextA>Indique o app e ganhe R$ 20</TextA>
          </Wrapper>
          <Wrapper>
            <ImageService source={require("../../assets/vounch.jpg")} />
            <TextA>Insira seu cupom</TextA>
          </Wrapper>
        </RowAlign>

        <CardLevelSix />

        <SectionActivities>
          <TitleAc>Sua última atividade</TitleAc>
          <Activities
            dateAt="Quarta-Feira"
            label="Você pagou PAG*JOÃO"
            price="-100"
            source={require("../../assets/purse.jpg")}
          />
          <Activities
            dateAt="quarta feira"
            label="Você pagou Souza"
            price="-300"
            source={require("../../assets/purse.jpg")}
          />
          <Activities
            dateAt="quarta feira"
            label="Você pagou Júlio"
            price="-50"
            source={require("../../assets/purse.jpg")}
          />
          <FooterAc>
            <TextAc>Ver toda sua atividade</TextAc>
            <TextAc>{">"}</TextAc>
          </FooterAc>
        </SectionActivities>
      </MpContent>
      <Footer />
    </Container>
  );
}
