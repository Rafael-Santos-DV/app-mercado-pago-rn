import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
  colors: ["#009fe3", "#009fe3", "#ECECEC", "#ECECEC", "#ECECEC", "#fff"],
})`
  flex: 1;
  padding: 50px 5px 0;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoxProfile = styled.View`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  padding: 5px;
  border-radius: 20px;
  background-color: ${({ theme: { COLORS } }) =>
    COLORS.PLACEHOLDER_WHITE_OPACITY};
  align-items: center;
  justify-content: center;
`;

export const ImageProfile = styled.Image`
  width: 22px;
  height: 22px;
`;

export const TextProfile = styled.Text`
  color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  margin-right: 10px;
  font-size: 15px;
`;

export const ContentRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoxHeadphone = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { COLORS } }) =>
    COLORS.PLACEHOLDER_WHITE_OPACITY};

  border-radius: 10px;

  margin-right: 10px;
`;

export const BoxPix = styled.View`
  flex-direction: row;
  padding: 10px;
  background-color: ${({ theme: { COLORS } }) =>
    COLORS.PLACEHOLDER_WHITE_OPACITY};

  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const TextPix = styled.Text`
  color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  font-size: 14px;
  margin-left: 5px;
`;

export const MpContent = styled.ScrollView`
  width: 100%;
  margin-top: 20px;
  padding: 0 10px;
`;

export const CardHeader = styled.View``;

export const Cards = styled.View`
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Box = styled.View`
  flex: 1;
  background-color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  border-radius: 4px;
  margin: 0 5px 0;
`;
export const ImageCard = styled.Image`
  width: 30px;
  height: 30px;
`;
export const TextCard = styled.Text`
  flex: 1;
  font-size: 10px;
  margin-left: 10px;
`;
