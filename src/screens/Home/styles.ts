import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
  colors: ["#009fe3", "#009fe3", "#ECECEC", "#ECECEC", "#ECECEC"],
})`
  flex: 1;
  padding: 50px 0 0 0;
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

export const RowLevelSix = styled(LinearGradient).attrs({
  colors: ["#a80e90", "#911287", "#361862", "#0F1A52"],
  start: {
    x: 0.2,
    y: 0,
  },
  end: {
    x: 1,
    y: 2,
  },
})`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 14px;
  border-radius: 6px;
  margin-top: 10px;
`;

export const ContainerServices = styled.View`
  padding: 20px;
  background-color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  border-radius: 5px;
  margin-top: 20px;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const SectionSlide = styled.ScrollView`
  flex: 1;
  margin-top: 15px;
`;

export const ItemSlide = styled.View<{ width: number }>`
  width: ${({ width }) => `${width - 60}px`};
  flex-direction: row;
  background-color: #01b1ea;
  border-radius: 5px;
  padding: 5px;
  margin: 0 4px;
`;

export const LinkText = styled.Text`
  text-transform: uppercase;
  flex-wrap: wrap;
  flex-direction: row;
  color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  font-size: 12px;
  font-family: "Inter_800ExtraBold";
`;

export const Background = styled.Image`
  flex: 0.5;
  height: 90px;
`;

export const RowSallary = styled.View`
  flex-direction: row;
  align-items: flex-start;
  background-color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  border-radius: 4px;
  padding: 10px;
  margin-top: 20px;
`;

export const ContentText = styled.View`
  flex: 1;
  align-self: center;
  justify-content: center;
  padding: 0 10px;
`;

export const RowAlign = styled.View`
  padding: 0 10px;
  background-color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  border-radius: 4px;
  margin-top: 10px;
`;

export const Wrapper = styled.View<{ borderTopBottom?: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 10px 0;

  ${({ borderTopBottom }) =>
    borderTopBottom
      ? css`
          border-color: rgba(0, 0, 0, 0.1);
          border-bottom-width: 1px;
          border-top-width: 1px;
        `
      : ``}
`;

export const TextA = styled.Text`
  margin-left: 10px;
`;

export const ImageService = styled.Image`
  width: 45px;
  height: 45px;
`;

export const SectionActivities = styled.View`
  background-color: ${({ theme: { COLORS } }) => COLORS.COLOR_WHITE};
  margin-top: 10px;
  border-radius: 5px;
`;

export const TitleAc = styled.Text`
  font-family: "Inter_800ExtraBold";
  padding: 10px 0;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  font-size: 16px;
  padding: 14px;
  margin-bottom: 5px;
`;

export const FooterAc = styled.View`
  border-top-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  flex-direction: row;
  padding: 15px;
`;

export const TextAc = styled.Text`
  color: ${({ theme: { COLORS } }) => COLORS.BACKGROUND_BLUE_WAFE};
  font-size: 13px;
  font-family: "Inter_800ExtraBold";
`;
